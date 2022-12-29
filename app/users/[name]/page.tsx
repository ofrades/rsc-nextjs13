async function fetchAPI(path: string) {
  const url = `https://hacker-news.firebaseio.com/v0/user/${path}.json`;
  const headers = { "User-Agent": "chrome" };

  return fetch(url, { headers }).then((r) => r.json());
}

const Users = async ({ params }: {
  params: { name: string };
}) => {
  const user = await fetchAPI(params.name)
  return (
      <div className="item-view">
        <div className="item-view-header">
        <p>user: {user.id}</p>
        <p>created: {user.created}</p>
        <p>karma: {user.karma}</p>
        <p>about: <span dangerouslySetInnerHTML={{ __html: user.about }} /></p>
      </div>
      </div>
  );
};

export default Users;
