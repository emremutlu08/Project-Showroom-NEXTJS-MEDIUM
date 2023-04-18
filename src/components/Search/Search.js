// import { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@mui/material/TextField';

// import SearchResults from './SearchResults';

// const useStyles = makeStyles(() => ({
//   form: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'left',
//     marginTop: '10px',
//     marginLeft: '20px',
//     width: '100%',
//     height: '100%',
//   },
//   button: {
//     marginTop: '0px',
//     marginLeft: '10px',

//     width: '14%',
//     height: '56px',
//   },
// }));

// export default function Login() {
//   const classes = useStyles();
//   // const router = useRouter();

//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchProfile, setSearchProfile] = useState([]);
//   const [searchProjects, setSearchProjects] = useState([]);
//   const [searchUser, setSearchUser] = useState([]);

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     const getResults = async () => {
//       const findProfile = await fetch(`/api/profiles/${searchTerm}`);
//       const profile = await findProfile.json();
//       let profileData = profile.data;
//       setSearchProfile(profileData);

//       if (profileData) {
//         const findProject = await fetch(
//           `/api/projects/${profileData.creatorId}`,
//         );
//         const project = await findProject.json();
//         const projectData = project.data;
//         setSearchProjects(projectData);

//         const findUser = await fetch(`/api/users/${profileData.creatorEmail}`);
//         const user = await findUser.json();
//         const userData = user.data;
//         setSearchUser(userData);
//       }
//     };
//     getResults();
//   }, [searchTerm]);

//   return (
//     <>
//       <form className={classes.form}>
//         <TextField
//           id="outlined-basic"
//           label="Search User"
//           variant="outlined"
//           value={searchTerm}
//           onChange={handleChange}
//           placeholder="Search User..."
//         />
//       </form>

//       <SearchResults
//         searchProfile={searchProfile}
//         searchProjects={searchProjects}
//         searchUser={searchUser}
//       />
//     </>
//   );
// }
