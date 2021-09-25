const toggleTooltip = (event, index) => {
  const tooltip = document.getElementById(`tooltip-${index}`)

  if (tooltip) {
    if (event.type === 'mouseover') {
      tooltip.classList.add('show')
    } else if (event.type === 'mouseout') {
      tooltip.classList.remove('show')
    }
  }
}

export default toggleTooltip;
