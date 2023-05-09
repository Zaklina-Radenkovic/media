import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotosListItems from "./PhotosListItems";
import Skeleton from "./Skeleton";

const PhotoList = ({ album }) => {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={4} />;
  } else if (error) {
    content = <div>Error loading albums..</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItems key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold text-gray-500">
          Photos In {album.title}
        </h3>
        <Button
          loading={addPhotoResults.isLoading}
          onClick={handleAddPhoto}
          className="bg-gray-500 text-gray-100"
        >
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
};
export default PhotoList;
