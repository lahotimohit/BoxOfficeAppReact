export default function AppTitle(props) {
  const {
    title = 'Box Office App',
    subtitle = 'Are you looking for movie or app?',
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
