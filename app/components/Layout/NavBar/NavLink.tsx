'use client';
import Link, { LinkProps } from 'next/link';

export type NavLinkProps = LinkProps & {
  children: React.ReactNode;
  className: string;
};

export const StyledNavLink = ({
  isActive,
  className,
  ...linkProps
}: LinkProps & {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}) => (
  <NavLink
    className={`${
      className ?? ''
    } font-open-sans uppercase hover:text-[#2d5a88]' ${
      isActive ? 'text-[#2d5a88]' : 'text-black'
    }`}
    {...linkProps}
  />
);

export function NavLink(props: NavLinkProps) {
  const { children, ...linkProps } = props;

  return <Link {...linkProps}>{props.children}</Link>;
}
