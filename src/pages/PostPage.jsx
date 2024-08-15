import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../feature/postSlice";

const PostPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const data = useSelector((state) => state.post);
  console.log(data);
  

  
  return <div>
            <div className="p-8">
                <h1 className="text-center font-bold text-5xl border-b-4 mb-3"> Posts</h1>
                {
               data.isLoading ? <h1 className="flex justify-center items-center text-5xl font-bold h-screen w-screen">Data is Loading...</h1> :
               data.posts.map((item,index)=>(
                <div key={index} className="my-3">
                    <h1 className="font-bold">{item.title} </h1>
                    <p className="text-sm font-semibold text-justify">{item.body} </p>

                </div>
               ))
            }
            </div>
  </div>;
};

export default PostPage;
