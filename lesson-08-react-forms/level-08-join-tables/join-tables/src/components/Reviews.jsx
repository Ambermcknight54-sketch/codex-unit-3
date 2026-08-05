import { Fragment } from "react";

export function Reviews({ reviews }) {
  return <dl>{reviews.map(toDetails)}</dl>;
}

function toDetails(item, index) {
  const key = index + item.created_at;
  const details = (
    <Fragment key={key}>
      <dt>STARS: {item.stars}</dt>
      <dd>USER: {item.users.email}</dd>
    </Fragment>
  );

  return details;
}
