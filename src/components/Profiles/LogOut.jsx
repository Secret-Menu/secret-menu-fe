export default function logOut() {
    localStorage.clear();
    this.props.history.push('/');
};
