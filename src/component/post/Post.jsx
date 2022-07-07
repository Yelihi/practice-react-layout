import './post.scss';

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="./images/blog/food1.jpeg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <div className="postCat">Music</div>
          <div className="postCat">Life</div>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postData">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis
        distinctio quod? Sint est nobis ullam esse at saepe, accusantium dolorum
        vero corrupti temporibus. Similique placeat iste mollitia est
        repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Beatae omnis distinctio quod? Sint est nobis ullam esse at saepe,
        accusantium dolorum vero corrupti temporibus. Similique placeat iste
        mollitia est repudiandae? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Beatae omnis distinctio quod? Sint est nobis ullam
        esse at saepe, accusantium dolorum vero corrupti temporibus. Similique
        placeat iste mollitia est repudiandae?
      </p>
    </div>
  );
}
