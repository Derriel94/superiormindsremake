import {useParams} from "react-router-dom";
interface BlogProps { 
	blogs,
};


const Blog = ({blogs}: BlogProps) => {

	let params = useParams();

	console.log(params.blog)

	return (
			<div style={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
				{blogs.blogs.map((blogarg)=>{
					if (blogarg.id == params.blog) {
						return (
							<div style={{width: "600px"}}>
								<div>{blogarg.title}</div>
								<img src={blogarg.imageUrl}/>
								<div >{blogarg.description}</div>
							</div>)
					}
				})}
			</div>
		);
};

export default Blog;