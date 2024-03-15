
import Chip from '@mui/material/Chip';
// import "./style.css"

//Component to create chips when user picks a tag in Settings


export default function BioChips({bioTags}) {


  const chipTagsArray = bioTags.tags;

  return (
    <div>
      {chipTagsArray.map((tag) => (
        <Chip className="chip" label={tag} />
      ))}
    </div>
  );



};