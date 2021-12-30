import * as React from "react"
import PropTypes from "prop-types"

const SelectButton = ({ text, selected, onClick }) => (
  <button onClick={onClick} className={"inline-block rounded-full " + (selected ? 'bg-neutral-200 dark:bg-neutral-800' : 'bg-transparent text-neutral-400 dark:text-neutral-600')}>
    <p className="font-bold m-0 px-4 py-1">{text}</p>
  </button>
)

SelectButton.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
}

SelectButton.defaultProps = {
  text: "Text",
  selected: false,
  onClick: {}
}

export default SelectButton