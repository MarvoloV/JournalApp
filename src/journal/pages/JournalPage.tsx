import Typography from "@mui/material/Typography";
import { JournalLayout } from "../layout/JournalLayout";
import {NoteView, NothingSelectedView} from "../views/index";
import { IconButton } from '@mui/material';
import { AddOutlined } from "@mui/icons-material";
export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >
        Tempor quis veniam nulla minim deserunt. Cupidatat nisi cillum enim
        consequat velit exercitation fugiat. Veniam cillum laborum incididunt
        labore quis adipisicing. Esse ea tempor do velit consectetur
        Lorem.Labore aute veniam consequat Lorem id tempor est reprehenderit
        mollit magna. Reprehenderit elit excepteur sit culpa pariatur sint
        excepteur officia qui cupidatat aliquip tempor culpa minim. Ea amet
        mollit commodo reprehenderit labore sint officia commodo tempor enim.
      </Typography> */}
      <NothingSelectedView/>
      {/* <NoteView/> */}
      <IconButton size="large" sx={{
        color:'white',backgroundColor:'error.main',':hover':{backgroundColor:'error.main', opacity:0.9},
        position:'fixed',
        right:50,
        bottom:50,
        
      }}>
        <AddOutlined fontSize="large"/>
      </IconButton>
    </JournalLayout>
  );
};
