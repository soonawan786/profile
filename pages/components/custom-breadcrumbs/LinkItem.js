import PropTypes from "prop-types";
import Link from "next/link";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const LinkContainer = styled("div")(({ theme, disabled, activeLast }) => ({
  display: "inline-flex",
  alignItems: "center",
  color: theme.palette.text.primary,
  textDecoration: "none", // Remove underline by default
  transition: "text-decoration 0.3s ease-in-out", // Smooth transition on hover
  ...(disabled &&
    !activeLast && {
      cursor: "default",
      pointerEvents: "none",
      color: theme.palette.text.disabled,
    }),
  marginRight: theme.spacing(1),
  display: "inherit",
  "& svg": { width: 20, height: 20 },
}));

BreadcrumbsLink.propTypes = {
  activeLast: PropTypes.bool,
  disabled: PropTypes.bool,
  link: PropTypes.shape({
    href: PropTypes.string,
    icon: PropTypes.node,
    name: PropTypes.string,
  }),
};

export default function BreadcrumbsLink({ link, activeLast, disabled }) {
  if (!link) {
    // Handle the case when 'link' is undefined
    return null;
  }
  const { name, href, icon } = link;

  if (href) {
    return (
      <Link href={href} passHref className="breadcrums no-underline">
        <LinkContainer disabled={disabled} activeLast={activeLast}>
          {icon && <Box component="span">{icon}</Box>}
          {name}
        </LinkContainer>
      </Link>
    );
  }

  return (
    <LinkContainer disabled={disabled} activeLast={activeLast}>
      {icon && <Box component="span">{icon}</Box>}
      {name}
    </LinkContainer>
  );
}
