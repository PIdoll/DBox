export default function getDataOrAriaProps (props) {
  return Object.keys(props).reduce((prev, key) => {
    if (
      (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') &&
      key.substr(0, 7) !== 'data-_'
    ) {
      prev[key] = props[key];
    }
    return prev
  }, {})
}

