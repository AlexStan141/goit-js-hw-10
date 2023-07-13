export function hideComponent(component) {
  component.style.position = 'absolute';
  component.style.visibility = 'hidden';
}

export function showComponent(component) {
  component.style.position = 'absolute';
  component.style.visibility = 'visible';
}
