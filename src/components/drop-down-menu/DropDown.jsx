import { Button } from "../button/Button";
import "../drop-down-menu/dropDown.css";

export function DropDown() {
  function activeButton(e) {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    document
      .querySelector(".article-active")
      .classList.remove("article-active");

    let selectedArticle = document.querySelector(
      `.${e.target.innerText.toLowerCase()}`
    );

    selectedArticle.classList.add("article-active");
  }
  return (
    <section className="drop-down">
      <ul className="drop-down__ul">
        <li>
          <a className="active" onMouseOver={activeButton}>
            Sales
          </a>
        </li>
        <li>
          <a onMouseOver={activeButton}>Marketing</a>
        </li>
        <li>
          <a onMouseOver={activeButton}>Managers</a>
        </li>
        <li>
          <a onMouseOver={activeButton}>Agencies</a>
        </li>
        <li>
          <a onMouseOver={activeButton}>Vendors</a>
        </li>
      </ul>
      <article className="drop-down__article sales article-active">
        <h2 className="drop-down__h2">Sales Features</h2>
        <p className="drop-down__p">
          Your sales process is bogged down by tedious and time-consuming
          activities that take away from your ability to convert. With
          GlassHive, you can break through those barriers and get the freedom
          you need to carry out sales activities that help you close.
        </p>
        <Button buttonText="Learn More" isArrow={true} />
      </article>
      <article className="drop-down__article marketing">
        <h2 className="drop-down__h2">Marketing Features</h2>
        <p className="drop-down__p">
          Your very own IT marketing hive, complete with everything you need to
          create super sweet IT marketing. From intuitive content creation
          features to powerful automation and visibility features, GlassHive
          takes your marketing to the next level.
        </p>
        <Button buttonText="Learn More" isArrow={true} />
      </article>
      <article className="drop-down__article managers">
        <h2 className="drop-down__h2">Managers Features</h2>
        <p className="drop-down__p">
          Sales and marketing management is like a game of chess. It takes years
          of detailed analysis and sound strategy. GlassHive provides you the
          immediate success formula and powerful features and data to
          consistently win.
        </p>
        <Button buttonText="Learn More" isArrow={true} />
      </article>
      <article className="drop-down__article agencies">
        <h2 className="drop-down__h2">Agencies Features</h2>
        <p className="drop-down__p">
          GlassHive gives your agency a platform to carry out truly influential
          digital marketing. With complete visibility, management, data, and
          analytics, you can become the powerhouse you were meant to be.
        </p>
        <Button buttonText="Learn More" isArrow={true} />
      </article>
      <article className="drop-down__article vendors">
        <h2 className="drop-down__h2">Vendors Features</h2>
        <p className="drop-down__p">
          GlassHive revolutionizes partner enablement by placing directly into
          your partner’s workflow. In addition to automated on-demand partner
          performance visibility, you will have the ability to share marketing
          and sales assets with them at unlimited scale.
        </p>
        <Button buttonText="Learn More" isArrow={true} />
      </article>
    </section>
  );
}
