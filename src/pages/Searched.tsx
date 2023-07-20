import React, {useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query, setDoc, doc, updateDoc, addDoc, arrayUnion } from "firebase/firestore";
import DeleteBlog from './../components/DeleteBlog.tsx';
import { db, auth } from "./../firebaseConfig.tsx";
import { useAuthState } from "react-firebase-hooks/auth";
import {Link, useParams} from "react-router-dom";

interface SearchedProps { 
	search,
	blogs,
};


const Searched = ({search, blogs}: SearchedProps) => {


	const [addComment, setAddComment] = useState(false);
	const [comment, setComment] = useState("");
	const [commenter, setCommenter] = useState("");
	
	const [user] = useAuthState(auth);
	console.log(user)
	// if (user != null) {
	// 	if (user.name) {
	// 		setCommenter(user.name)
	// 	} else {
	// 		setCommenter(user.displayName)
	// 	}
	// } else {

	// }

	const tempUser = {
		displayName: " ",
		name: "",
	}
	let [keyword, setKeyword] = useState('');

	const handleLike = async(id, likes) => {
		let newLikes = ++likes;
		
		const docRef = doc(db, "blogs", id);
		console.log(docRef);
		await updateDoc(docRef, {likes: newLikes});
		
		toast( "Thanks for Liking, dont forget to subscribe to our newsletter!" ,{type: "success"})
	}


	const handleAdComment = async() => {
		setAddComment(true);
		
	
		toast( "Remember to be kind, the server is always watching!" ,{type: "warning"})
	
		
	}
	useEffect(()=>{
			if (user) {
			setCommenter(user.displayName)			
		}

	},[user])

	const handlePostSubmit = async(id, comments)=> {
		setAddComment(false);
		setComment(comment);
	
		const commentsDocRef = doc(db, "blogs", id);
	
		const newCommentObject =
			{comment: comment,
			commenter: commenter}
				
 		await updateDoc(commentsDocRef, {
 			comments: arrayUnion(newCommentObject)
 		})
	

	}

	const displayComments = (comments) => {
			
		
		return <div>{comments.map((commentText)=>{
			console.log(commentText)
			return (<div className="border">
						<div id="left">
							User: {commentText.commenter}
						</div>
						<div>
							{commentText.comment}
						</div>
						
					</div>);
		})}</div>;
	}


const [pageNumber, setPageNumber] = useState(0);
const blogsPerPage = 1;
const pagesVisited = pageNumber * blogsPerPage;
// const starRef = useRef();

const handleChange = (e) => {
			setKeyword(e.target.value);	
	}

	console.log("BLOGS", blogs);

	console.log("search", search);
const displayBlogs = blogs.blogs.filter((blog)=>{
						if(keyword == "") {
							return blog
						} else if (blog.title.toLowerCase().includes(keyword.toLowerCase())
								   || 
								   blog.description.toLowerCase().includes(keyword.toLowerCase())) {
							return blog
						}
					}).slice(pagesVisited, pagesVisited + blogsPerPage).map(blog =>{
	return (<div>
			{blogs.blogs[0].title !== "temp"?
			<div key={blog.id} className="article">
								<h1>{blog.title}</h1><div>Likes:{blog.likes}</div>
								<Link to={`${blog.id}`}><img src = {blog.imageUrl} alt={blog.title} style={{height: 180, width: 180}} /></Link>
								<div style={{width: "400px"}} id="articleDesc">{blog.description}</div>
								<div>{blog.createdAt.toDate().toDateString()}</div>
								
								{
									user.displayName =="MadMac"  ? <div><DeleteBlog id={blog.id} imageUrl={blog.imageUrl} /></div>:<div></div>  
								}
								{
									!user
									? 
									<div></div> 
									: 
									<div>
										<button onClick={()=>handleLike(blog.id, blog.likes)}>Like</button>
										<button onClick={handleAdComment}>Comment</button>
									</div>
								}
								<div>
									{addComment
									?
									<div>
									<h1>Type Comment</h1>												
									<input type="textArea" name="comment" onChange={(e)=>setComment(e.target.value)} />
									<button onClick={()=>handlePostSubmit(blog.id, blog.comments)}>Post Comment</button>
									</div>
									:
									<div></div>

									}
									{
										!blog.comments
										?
										<div id="comment">No Comments Yet</div>
										:
										<div id="comment">
											{displayComments(blog.comments)}
										</div>
									}
								</div>
							</div>
							:
							<div></div>
							}</div>
		);
})


	useEffect(()=> {
		setKeyword(search)
	},[search])

	return (<div>
			{blogs.blogs[0].title !== "temp"?
			<div>
				<h3>Search Results for: {keyword}</h3>
				<input type="text" name="keyword" onChange={handleChange} />
				{displayBlogs}
			</div>
			:
			<div>
				<h3>Search Results for: {keyword}</h3>
				<input type="text" name="keyword" onChange={handleChange} />
			
			</div>
			}
			
			</div>
		);
};

export default Searched;