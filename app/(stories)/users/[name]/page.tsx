async function fetchAPI(path: string) {
  const url = `https://hacker-news.firebaseio.com/v0/user/${path}.json`;
  const headers = { "User-Agent": "chrome" };

  return fetch(url, { headers }).then((r) => r.json());
}

const Users = async ({ params }: {
  params: { name: string };
}) => {
  const user = await fetchAPI(params.name)
  console.log(user)
  return (
    <div className="item-view">
      <div className="item-view-header">
        <p>user: {user.id}</p>
        <p>created: {user.created}</p>
        <p>karma: {user.karma}</p>
        {user.about &&
          <p>about: <span dangerouslySetInnerHTML={{ __html: user.about }} /></p>
        }
      </div>
    </div>
  );
};

export default Users;
