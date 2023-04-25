// import PropTypes from 'prop-types';

export const Profile = ({ events }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={events.avatar} alt="User avatar" className="avatar" />
        <p className="name">{events.username}</p>
        <p className="tag">{events.tag}</p>
        <p className="location">{events.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{events.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{events.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{events.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Profile.propTypes = {
//   events: PropTypes.arrayOf(
//     PropTypes.exact({
//       username: PropTypes.string.isRequired,
//       tag: PropTypes.string.isRequired,
//       location: PropTypes.string.isRequired,
//       avatar: PropTypes.any.isRequired,
//       stats: {
//         followers: PropTypes.number.isRequired,
//         views: PropTypes.number.isRequired,
//         likes: PropTypes.number.isRequired,
//       },
//     })
//   ),
// };
