function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closingHour = 22;
  const isOpen = hour >= openHour && hour <= closingHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <h2>We are currently open</h2>
      ) : (
        <h2>We are currently Closed!</h2>
      )}
    </footer>
  );
}

export default Footer;
