import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch(" https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const PostsComponent = () => {
  const { isLoading, isError, data, error } = useQuery(["posts"], fetchPosts, {
    staleTime: 60000, //one minute until query transition from fresh to stale.
    cacheTime: 300000, // five minutes until inactive queries will be removed from the cache.
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      {data.slice(0, 20).map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button onClick={fetchPosts}>Refetch Posts</button>
    </div>
  );
};

export default PostsComponent;