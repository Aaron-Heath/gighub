
import Chip from '@mui/material/Chip';
import "./style.css"


export default function SettingsChips(selectedTags) {

  // console.log(selectedTags.selectedTags)

  const chipTagsArray = selectedTags.selectedTags;

  // console.log(chipTagsArray)


  return (
    <div>
      {chipTagsArray.map((tag) => (
        <Chip className="chip" label={tag} />
      ))}
    </div>
  );



};
