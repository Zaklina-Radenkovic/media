import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsLIstItem";

const AlbumsList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  //this results will have some properties but with no mutation (adding album) executed
  //   console.log(results);

  const handleAddAlbum = () => {
    addAlbum(user);
  };
  //But, after calling 'addAlbum()' we have mutation and much more properties
  //   console.log(results);
  let content;
  // 'isFetching' is every time we fetch data; 'isLoading' is only for the first time fetching
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading albums..</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold text-stone-500">
          Albums by {user.name}
        </h3>
        <Button
          primary
          onClick={handleAddAlbum}
          loading={results.isLoading}
          className="text-stone-100 bg-stone-500 border-stone-500"
        >
          + Add album
        </Button>
      </div>
      {content}
    </div>
  );
};
export default AlbumsList;
