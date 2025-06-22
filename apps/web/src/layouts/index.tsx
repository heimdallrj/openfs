import Login from "../components/Login";

type Props = {
  isProtected?: boolean;
  children: React.ReactNode;
};

export default function IndexLayout({ isProtected, children }: Props) {
  // @TODO Fetch this from useAuth()
  const isLoggedIn = true;

  if (isProtected && !isLoggedIn) return <Login />;

  return <>{children}</>;
}
