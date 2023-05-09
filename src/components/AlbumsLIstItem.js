import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import PhotoList from "./PhotosList";

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-2"
        onClick={handleRemoveAlbum}
        loading={results.isLoading} //from console.log(results)
      >
        <GoTrashcan style={{ backgroundColor: "inherit", color: "#8b7364" }} />
      </Button>
      <p className="text-stone-500 font-medium">{album.title}</p>
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotoList album={album} />
    </ExpandablePanel>
  );
}
export default AlbumsListItem;
