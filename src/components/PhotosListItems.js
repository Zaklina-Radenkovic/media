import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

const PhotosListItems = ({ photo }) => {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div className="relative m-2 cursor-pointer" onClick={handleRemovePhoto}>
      <img className="h-20 w-20" src={photo.url} alt="random pic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan
          className="text-3xl"
          style={{ backgroundColor: "inherit", color: "#8b7364" }}
        />
      </div>
    </div>
  );
};
export default PhotosListItems;
