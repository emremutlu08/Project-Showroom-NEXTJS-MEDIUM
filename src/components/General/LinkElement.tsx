/* NEXT.JS */
import LinkNext from 'next/link';

/* MATERIAL UI */
// Components
import Link from '@material-ui/core/Link';

/* Main Component */
const LinkElement = (props: {
  url?: URL;
  text: String;
  onClick?: Function;
}) => {
  const { url, text, onClick } = props;
  if (url) {
    return (
      <LinkNext href={url} passHref>
        <Link color="inherit" underline="none">
          {text}
        </Link>
      </LinkNext>
    );
  }
  if (onClick) {
    return (
      <Link
        color="inherit"
        underline="none"
        onClick={() => {
          onClick();
        }}
      >
        {text}
      </Link>
    );
  }
  return <div />;
};

/* Export Main Component */
export default LinkElement;
