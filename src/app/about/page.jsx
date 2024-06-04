import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
    return (
      <div>
        <div className={styles.imgContainer}>
          {/* <Image src="/about.png" alt="" fill /> */}
          <Image 
            src="https://images.pexels.com/photos/20631973/pexels-photo-20631973/free-photo-of-a-vase-with-dried-flowers-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
            alt=""
            fill />
        </div>
        
      </div>
    )
  };
  
  export default AboutPage;