import Image from "next/image";
import styles from "./page.module.scss";
import Board from "./ui/common/\bboard";
export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.titleWrap}>
                <h1>윤지연</h1>
                <br />
                <h2>Web Frontend Developer</h2>
            </div>
            <div className={styles.imageBox}>
                <Image src="/image/rupy.jpg" fill alt={""} />
            </div>
            <div className={styles.textContentwrap}>
                <span>🐹</span> 안녕하세요. 웹 프론트엔드 개발자 윤지연입니다.
                <br />
                <br />
                머시기머시기를 좋아하며 성장하는 습관을 만들어가고 있습니다.
            </div>
            <Board />
        </main>
    );
}
