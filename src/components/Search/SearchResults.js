import HeroContent from '../HeroContent';
import CardGallery from '../CardGallery';

export default function SearchResults({
  searchProfile,
  searchProjects,
  searchUser,
}) {
  return (
    <>
      <HeroContent
        currentUser={searchUser}
        currentUserProjects={searchProjects}
        currentProfile={searchProfile}
      />
      <CardGallery
        currentUser={searchUser}
        currentUserProjects={searchProjects}
        currentProfile={searchProfile}
      />
    </>
  );
}
