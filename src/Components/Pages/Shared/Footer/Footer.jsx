const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-[#FCF8ED] text-base-content">
        <aside>
          <img
            className="rounded-full w-[70px] h-[70px]"
            src="https://i.ibb.co/0MbWfk5/download.jpg"
            alt=""
          />

          <p>
            In a world filled with digital <br /> screens and instant gratification, <br />
            the allure of a physical <br /> bookstore remains as strong as ever.
          </p>
        </aside>
        <nav>
          <header className="footer-title text-black">Company</header>
          <a className="link link-hover">career</a>
          <a className="link link-hover">Join as a teacher</a>
          <a className="link link-hover">If you want to be an affiliate</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Refund Policy</a>
          <a className="link link-hover">User Terms.</a>
        </nav>
        <nav>
          <header className="footer-title text-black">Courses</header>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">Online Course</a>
          <a className="link link-hover">Notes and Guides</a>
          <a className="link link-hover">Video Course</a>
        </nav>
        <nav>
          <header className="footer-title text-black">Support</header>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Notes and Guides</a>
          <a className="link link-hover">Privacy</a>
        </nav>
        <nav>
          <header className="footer-title text-black">Contac Info</header>
          <a className="link link-hover">Call: 16910 (8AM - 11PM)</a>
          <a className="link link-hover">
            From outside the country: +8801761105578
          </a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover" href="mailto:mdjewel878761@gmail.com">
            Email: mdjewel878761@gmail.com
          </a>

          <div className="flex gap-4">
            <a
              className="link link-hover"
              href="https://www.facebook.com/yourpage"
            >
              Facebook
            </a>
            <a className="link link-hover" href="https://twitter.com/yourpage">
              Twitter
            </a>
            <a
              className="link link-hover"
              href="https://www.linkedin.com/in/yourprofile"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
