import Link from "next/link";

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
  quiet: "button-quiet",
};

export default function Button({ href, variant = "primary", className = "", children, ...props }) {
  const classes = `${variants[variant] || variants.primary} ${className}`.trim();
  if (href) return <Link href={href} className={classes} {...props}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}
