// Built-in library.
import React, { useState, useEffect } from "react";

// Pages & components.
import styles from '../index_page/index_page.module.css';

// Image assets.
import heroRightImage from '../../assets/images/index_page/gavel_hero.png';
import officeImage from '../../assets/images/index_page/akarenga_F1.png';
import courtOrderIcon from '../../assets/images/index_page/court-order.png';
import uTorrentIcon from '../../assets/images/index_page/utorrent.png';
import famLawImageIcon from '../../assets/images/index_page/family-law.png';
import lawyerManIcon from '../../assets/images/index_page/lawyer-man.png';
import backgroundImageSolution1 from '../../assets/images/index_page/solutionBackground1.png';
import backgroundImageSolution2 from '../../assets/images/index_page/solutionBackground2.png';
import backgroundImageSolution3 from '../../assets/images/index_page/solutionBackground3.png';
import backgroundImageSolution4 from '../../assets/images/index_page/solutionBackground4.png';

export default function Index() {

    // Href for repetitive routes.
    const contactHref = "";
    const trackRecordHref = "";

    // Contents displayed in Q&A section.
    const questionAndAnswerElements = [
        {
            "question" : "これまでの著作権侵害事件の取り扱い実績はどの程度ですか？", 
            "answer" : "これまでに当社は4,500件以上の開示判決を取得し、そのうち約1,600件は和解に至っております。これらの実績は業界内でもトップクラスであり、各方面から高い信頼をいただいている証左と考えております。"
        },

        {
            "question" : "トレントの知識が無い場合においても依頼は可能ですか？", 
            "answer" : "はい、著作物をお持ちのクライアント様からの各種ご依頼やご相談も承っております。"
        },

        {
            "question" : "個人クリエイターからのご相談や調査のご依頼は可能ですか？", 
            "answer" : "はい、フリーランスや個人で活動されているクリエイター様からのご依頼も多数お受けしております。調査会社と連携し、現状の被害状況を把握した上で、費用対効果を含めた総合的な判断をご提案させていただきます。"
        },
        
        {
            "question" : "現在、求人募集は行っていますか？",
            "answer" : "はい、事務職をはじめ、さまざまな分野で求人募集を行っております。ご相談などございましたら、どうぞお気軽にお問い合わせください。"
        }
    ];

    // Animations
    const [ activeIndex, setActiveIndex ] = useState(null);

    return(
        <div className={styles.indexContainer}>
            {/* Hero section */}
            <section className="hero">
                <div className={styles.heroContainer}>

                    <div className={styles.heroSectionTop}>
                        <div className={styles.heroTopLeft}>
                            <div className={styles.heroLeftHeader}>
                                <h3>
                                    知的財産保護に知的財産保護に経験豊富な弁護士が
                                    <span className={styles.heroHeaderSpan}>迅速</span>かつ
                                    <span className={styles.heroHeaderSpan}>確実</span>にサポートします
                                </h3>
                                <p>
                                    赤れんが法律事務所は、違法アップロードや著作権侵害の対策を主に取り組んでいます。
                                    お悩み等ございましたら、お問い合わせください。
                                </p>
                            </div>

                            <div className={styles.heroLeftContactButtons}>
                                <div className={styles.heroContactButtonFirst}>
                                    <a href="">お問い合わせ</a>
                                </div>
                                <div className={styles.heroContactButtonSecond}>
                                    <a href="">判例や実績をみる</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.heroTopRight}>
                            <img src={heroRightImage} alt="gavel image" />
                        </div>
                    </div>

                    <div className={styles.heroBottom}>
                        <div className={styles.heroBottomRep}>
                            <div className="heroRepCard">
                                <div className={styles.heroRepContent}>
                                    <h3>4,500+</h3>
                                    <p>開示件数</p>
                                </div>
                            </div>

                            <span className="heroRepSeparator" />

                            <div className="heroRepCard">
                                <div className={styles.heroRepContent}>
                                    <h3>1,600+</h3>
                                    <p>和解件数</p>
                                </div>
                            </div>

                            <span className="heroRepSeparator" />

                            <div className="heroRepCard">
                                <div className={styles.heroRepContent}>
                                    <h3>30</h3>
                                    <p>クライアント数</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* About us section */}
            <section className={styles.aboutUs}>
                <div className={styles.aboutUsContainer}>
                    <div className={styles.aboutUsLeft}>
                        <div className={styles.aboutUsTopic}>
                            <p><span></span>我々の事務所について</p>
                        </div>

                        <div className={styles.aboutUsHeader}>
                            <h3>
                                違法アップロードの調査、証拠作成から示談交渉まで、一気通貫型で弁護士がサポート
                            </h3>
                            <p>
                                私たちは長年にわたり著作権分野で培った専門知識と実績を活かし、クリエイターの皆様の貴重な知的財産をお守りしています。
                                近年、インターネット上でのトレントを利用した違法アップロード・ダウンロードによる著作権侵害が深刻化しており、
                                映像作品、音楽、画像などのコンテンツが権利者の知らないところで不正利用されるケースが急増しています。
                                このような著作権侵害は、正当な権利者の収益機会を奪い、作品の価値を毀損する重大な問題です。
                                <br />
                                <br />
                                著作権侵害による被害を最小限に抑え、あなたの作品の権利を適切に保護するため、経験豊富な弁護士が迅速かつ的確に対応いたします。
                                お困りの際は、まずはお気軽にご相談ください。
                            </p>
                        </div>

                        <div className={styles.aboutUsContactButton}>
                            <a href="">お問い合わせ</a>
                        </div>
                    </div>
                    <div className={styles.aboutUsRight}>
                        <img src={officeImage} alt="" />
                    </div>
                </div>
            </section>

            {/* Our services section */}
            <section className={styles.ourService}>
                <div className={styles.ourServiceContainer}>
                    <div className={styles.ourServiceLeft}>
                        <ul>
                            <li>
                                <div className={styles.ourServiceCardHeader}>
                                    <img src={courtOrderIcon} alt="gavel icon" />
                                    <h3>開示請求</h3>
                                </div>
                                
                                <div className={styles.ourServiceCardParagraph}>
                                    <p>
                                        開示請求とは、インターネット上で著作権侵害や誹謗中傷の被害を受けた際に、
                                        加害者の身元（氏名・住所・電話番号など）をプロバイダから開示してもらう法的手続きです。
                                    </p>
                                </div>

                                <div className={styles.ourServiceCardButton}>
                                    <a href="">詳しく見る<span>&#8594;</span></a>
                                </div>
                            </li>

                            <li>
                                <div className={styles.ourServiceCardHeader}>
                                    <img src={famLawImageIcon} alt="family tree icon" />
                                    <h3>離婚訴訟</h3>
                                </div>
                                
                                <div className={styles.ourServiceCardParagraph}>
                                    <p>
                                        亡くなった方（被相続人）の財産を相続人間で分け合う手続きです。
                                        不動産、預貯金、株式などの評価や分割方法、遺留分の問題など、
                                        専門的な知識が必要な複雑な手続きとなることが多く、適切な法的サポートが重要です。
                                    </p>
                                </div>

                                <div className={styles.ourServiceCardButton}>
                                    <a href="">詳しく見る<span>&#8594;</span></a>
                                </div>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <div className={styles.ourServiceCardHeader}>
                                    <img src={uTorrentIcon} alt="uTorrent icon" />
                                    <h3>トレント事件</h3>
                                </div>
                                
                                <div className={styles.ourServiceCardParagraph}>
                                    <p>
                                        トレント事件とは、ファイル共有ソフトのトレントを利用した著作権侵害事件です。
                                        違法ダウンロード・アップロードにより、10年以下の懲役や1000万円以下の罰金が科せられる可能性があり、
                                        被害者からの損害賠償請求も頻発しています。
                                    </p>
                                </div>

                                <div className={styles.ourServiceCardButton}>
                                    <a href="">詳しく見る<span>&#8594;</span></a>
                                </div>
                            </li>

                            <li>
                                <div className={styles.ourServiceCardHeader}>
                                    <img src={lawyerManIcon} alt="lawyer icon" />
                                    <h3>遺産分割</h3>
                                </div>
                                
                                <div className={styles.ourServiceCardParagraph}>
                                    <p>
                                        夫婦間で離婚の合意が得られない場合に、家庭裁判所に離婚を求めて提起する裁判手続きです。
                                        通常は協議離婚、調停離婚を経た後の最終手段として行われます。
                                        法的根拠に基づいた主張・立証が必要となる専門性の高い手続きです。
                                        適切な準備と戦略的な対応が結果を大きく左右します。
                                    </p>
                                </div>

                                <div className={styles.ourServiceCardButton}>
                                    <a href="">詳しく見る<span>&#8594;</span></a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.ourServiceRight}>
                        <div className={styles.ourServiceTopic}>
                            <p><span></span>我々の業務内容について</p>
                        </div>

                        <div className={styles.ourServiceHeader}>
                            <h3>
                                皆さまの日常生活において直面する様々なトラブルや課題に対し、迅速かつ適切な対応を行い、解決へと導くお手伝いをいたします
                            </h3>

                            <p>
                                トレント事件をはじめとする著作権侵害対応のほか、SNS・掲示板等での誹謗中傷・風評被害対策、相続財産の分割協議・遺留分減殺請求、
                                離婚に伴う財産分与・親権問題、企業間取引での債務不履行・契約解除など、民事・家事事件全般にわたって、
                                豊富な経験と専門知識を活かした質の高い法的サービスを提供いたします。
                            </p>
                        </div>

                        <div className={styles.ourServiceContactButton}>
                            <a href="">お問い合わせ</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* YouTube Promotion section */}
            <section className={styles.youTubePR}>
                <div className={styles.youTubePRContainer}>
                    <div className={styles.embedYouTubeVideo}></div>
                    <div className={styles.youTubePRComment}>
                        {/* To visualize and customize, using text. */}
                        <p className={styles.quoteFirst}>"</p>

                        <h3>
                            複雑化する現代の法的トラブルを、経験豊富な弁護士が総合的かつ戦略的にサポートいたします。
                        </h3>

                        {/* To visualize and customize, using text. */}
                        <p className={styles.quoteSecond}>"</p>
                    </div>
                </div>
            </section>

            {/* Solutions section */}
            <section className={styles.solutions}>
                <div className={styles.solutionsContainer}>
                    <div className={styles.solutionsHeader}>
                        <p>
                            当事務所の実績とサービスを是非ご確認ください。
                        </p>
                        <p>
                            あなたのお役に立てる解決策が必ずございます。
                        </p>
                    </div>
                    <ul>
                        <li className="solutionCard" style={{ backgroundImage: `url(${backgroundImageSolution1})`}}>
                            <a href="">
                                <h3>ニュースをみる</h3>
                                <p></p>
                            </a>
                        </li>

                        <li className="solutionCard" style={{ backgroundImage: `url(${backgroundImageSolution2})`}}>
                            <a href="">
                                <h3>当事務所について詳しく知る</h3>
                                <p>当事務所ではトレント事件の対応のみならず、様々な問題解決に取り組んでいます</p>
                            </a>
                        </li>

                        <li className="solutionCard" style={{ backgroundImage: `url(${backgroundImageSolution3})`}}>
                            <a href="">
                                <h3>弁護士紹介</h3>
                                <p>当事務所に所属する弁護士の経歴や対応分野を確認できます</p>
                            </a>
                        </li>

                        <li className="solutionCard" style={{ backgroundImage: `url(${backgroundImageSolution4})`}}>
                            <a href="">
                                <h3>お問い合わせ</h3>
                                <p>日頃のお悩みや問題を解決します。気軽にご利用ください。</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Q&A section */}
            <section className={styles.questionAndAnswer}>
                <div className={styles.questionAndAnswerContainer}>

                    <div className={styles.questionAndAnswerLeft}>
                        <div className={styles.questionAndAnswerLeftHeader}>
                            <h3>ご相談の多い質問事項</h3>
                            <p>
                                トレント事件をはじめとする著作権侵害や各種法的トラブルについて、
                                クライアント様から多く寄せられるご質問とその回答をまとめております。
                                ご相談前にご一読いただくことで、問題の全体像や対応の流れをより明確にご理解いただけます。
                            </p>
                        </div>

                        <div className={styles.questionAndAnswerContactButton}>
                            <a href="">お問い合わせ</a>
                        </div>
                    </div>

                    <div className={styles.questionAndAnswerRight}>
                        <ul className={styles.questionAndAnswerCard}>
                            {questionAndAnswerElements.map((card, index) => (
                                <li key={index}>
                                    <div className={styles.questionAndAnswerCardContent}>
                                        <p>{card.question}</p>
                                        <div className={styles.plusMinusButton}>
                                            <div 
                                                className={`${styles.plusMinus} ${activeIndex === index ? styles.active : ""}`}
                                                onClick={() => setActiveIndex(activeIndex === index ? null : index )}
                                            >        
                                            </div>
                                        </div>
                                    </div>

                                    {/* This content is initially hidden. By clicking the plus / minus buttons, its appears and disappears.*/}
                                    <div 
                                        className={styles.questionAndAnswerCardHiddenContent}
                                        style={{ display: activeIndex === index ? "block" : "none"}}
                                    >
                                        <p>{card.answer}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact us section */}
            <section className={styles.contactUs}>
                <div className={styles.contactUsContainer}>
                    <div className={styles.contactUsHeader}>
                        <h3>複雑な法的問題にお悩みですか？</h3>
                        <h3>我々がお客様に最適な解決策をご提案いたします</h3>
                    </div>

                    <div className={styles.contactUsButtons}>
                        <div className={styles.contactUsButtonFirst}>
                            <a href="">お問い合わせ</a>
                        </div>

                        <div className={styles.contactUsButtonSecond}>
                            <a href="">判例や実績をみる</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};