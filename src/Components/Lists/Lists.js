import {Col, Row} from "react-bootstrap";
import React from "react";

export const  UpdateList = [
    {
        id: 1,
        tittle: "7.30b",
        imgurl: "/img/card/update/card-1.jpg",
        cardDescription: "Фікс золота та талантів на досвід вже в грі",
        modalDescription: <>
            <div>
                <h4>Загальні зміни</h4>
                <ul>
                    <li>
                        Аванпости тепер дають досвід кожних десять хвилин замість п'яти. Формула:
                        <em>XP = 20 × поточна хвилина – 50.</em>
                    </li>
                    <li>
                        Видалені святині, які стояли не біля Рошана. Тепер святиня
                        активується через 7 хвилин після початку гри замість 5, а перезарядження
                        знижена з 5 хвилин до 4.
                    </li>
                    <li>Видалено всі таланти на досвід.</li>
                </ul>
            </div>
            <h4>Зміни героїв</h4>
            <div>
                <div className="HeroName">
                    <img
                        className="img-s-hero"
                        title="Abaddon"
                        src="https://dota2.ru/img/heroes/abaddon/icon.jpg"
                        alt="Abaddon"
                        width="27"
                        height="15"
                    />&nbsp;Abaddon
                </div>
                <ul className="PatchNotesList HeroNotesList">
                    <li className="PatchNote">Талант на досвід замінено на «+10 до сили».</li>
                </ul>
            </div>
            <div>
                <div className="HeroName">
                    <img
                        className="img-s-hero"
                        title="Pudge"
                        src="https://dota2.ru/img/heroes/pudge/icon.jpg"
                        alt="Pudge"
                        width="27"
                        height="15"
                    /> Pudge
                </div>
                <ul>
                    <li>Талант на досвід замінено на «+5 до броні».</li>
                </ul>
            </div>
            <div>
                <div><img title="Zeus"
                          src="https://dota2.ru/img/heroes/zeus/icon.jpg" alt="Zeus" width="27"
                          height="15"/> Zeus
                </div>
                <ul>
                    <li>Талант на досвід замінено на «+250 до здоров'я».</li>
                </ul>
            </div>
            <div>
                <div><img title="Ursa"
                          src="https://dota2.ru/img/heroes/ursa/icon.jpg" alt="Ursa" width="27"
                          height="15"/>Ursa
                </div>
                <ul>
                    <li>Приріст сили зменшено з 3.1 до 2,8.</li>
                </ul>
                <div>
                    <div>
                        <ul>
                            <li>Earthshock: витрата мани збільшена з 75 до 85 одиниць.</li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    },
    {
        id: 2,
        tittle: "7.30a",
        imgurl: "/img/card/update/card-2.jpg",
        cardDescription: "Розробники послабили два предмети, чотирьох героїв ",
        modalDescription: <>
            <p></p>
            <h4>Загальні зміни</h4>
            <ul>
                <li>Тепер з нейтральних кріпів завжди падає тільки три предмети кожного
                    розряду(раніше був шанс, що випаде більше);
                </li>
                <li>Тепер для кожного рівня немає терміну закінчення випадання, є лише
                    початковий час (5/15/25/40/70). Предмети вищих рівнів будуть враховуватися першими при дропі;
                </li>
                <li>Шанс випадання нейтральних предметів змінено з 10/5/2.5/1.25/ тощо. на
                    9/6/3.
                </li>
            </ul>


            <h4>Зміни предметів</h4>
            <div><img
                src="https://cdn.dota2.com/apps/dota2/images//items/demonicon_lg.png"
                alt="" width="30" height="22"/>Book of the Dead 4
                <ul
                >
                    <li>Перезаряджання збільшено з 75 на 90</li>
                    <li>Тривалість зменшена з 90 на 75</li>
                    <li>Виправлено помилку, при якій попередні Necronomicon не зникали
                    </li>
                </ul>

            </div>

            <div>
                <img

                    src="https://cdn.dota2.com/apps/dota2/images//items/clumsy_net_lg.png"
                    alt=""
                    width="30"
                />Clumsy Net
                <ul>
                    <li>Розряд змінено з 3 на 2</li>
                    <li>Регенерація мани зменшена з 3 до 2</li>
                </ul>
            </div>

            <div>
                <img

                    src="https://cdn.dota2.com/apps/dota2/images//items/helm_of_the_undying_lg.png"
                    alt=""
                    width="30"
                    height="22"
                /> Helmett
                <ul>
                    <li>Розряд змінено з 2 на 3</li>
                </ul>
            </div>

            <div>
                <img

                    src="https://cdn.dota2.com/apps/dota2/images//items/illusionsts_cape_lg.png"
                    alt=""
                    width="30"
                    height="22"
                /> Ilussion
                <ul>
                    <li>
                        Тепер також збільшує шкоду ваших підконтрольних юнітів.
                    </li>
                </ul>
            </div>
            <div>
                <img
                    src="https://cdn.dota2.com/apps/dota2/images//items/imp_claw_lg.png"
                    alt=""
                    width="30"
                /> Krid
                <ul>
                    <li>
                        Критичний удар зменшено з 1.6 до 1.4
                    </li>
                    <li>Втрата збільшена з 18 до 20</li>
                </ul>
            </div>
            <div>
                <img
                    src="https://cdn.dota2.com/apps/dota2/images//items/iron_talon_lg.png"
                    alt=""
                    width="30"
                />Iron Talon
                <ul>
                    <li>Перезаряджання збільшено з 20 на 25</li>
                </ul>
            </div>
        </>
    },
    {
        id: 3,
        tittle: "Патч 7.30",
        imgurl: "/img/card/update/card-3.jpg",
        cardDescription: "Довгоочікуваний патч 7.30 вже вийшов, головні зміни в описі",
        modalDescription: <>
            <p></p>
            <p>
                Вранці 18 серпня в Dota 2 вийшов патч 7.30. З оновленням розробники внесли
                балансні зміни, що торкнулися багатьох персонажів, зокрема
                Luna,
                Hoodwink
                і
                Winter Wyvern. Також було скориговано характеристики низки предметів.
            </p>

            <div

            >
                <h3>
                    Загальні зміни
                </h3>
                <div>
                    <div>
                        <div c>
                            <ul>
                                <li>
                                    Змінено другу стадію вибору в режимі Captains Mode: було
                                    Темрява/Світло/Темрява/Світло, стало Темрява/Світло/Світло/Тьма (якщо сили
                                    Світла
                                    обирають першими)
                                </li>
                                <li>
                                    Якщо у героя кілька джерел критичної атаки, то перевірка
                                    на неї проходить з найсильнішої до найслабшої і
                                    зупиняється, якщо критична шкода спрацює. Середня шкода в
                                    секунду залишається незмінним, але рідше відбуваються ситуації, коли
                                    кілька атак поспіль були з критичними втратами або без нього.
                                </li>
                                <li>
                                    Зменшення перезарядки у відсотках більше не складається
                                    (Зменшення в секундах - складається)
                                </li>
                                <li>
                                    У всіх героїв, які не мають базового відновлення здоров'я, воно
                                    збільшено до 0,25
                                </li>
                                <li>Лікування від руни води зменшено з 80 до 40 здоров'я</li>
                                <li>
                                    За друге вбивство Рошана більше не дається
                                    <img

                                        title="Cheese"
                                        src="/img/items/cheese.jpg?1614069699"
                                        alt="Cheese"
                                    />
                                </li>
                                <li>
                                    Тепер випадає по 5 нейтральних предметів кожного розряду
                                    замість 4
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>

            <h4>Герої</h4>
            <div>
                <div>
                    <img

                        src="https://cdn.dota2.com/apps/dota2/images//heroes/doom_bringer_hphover.png"
                        alt=""
                        width="30"
                        height="22"
                    />DOOM
                </div>
                <ul>
                    <li>Базова сила зменшена на 2;</li>
                    <li>
                        Втрата Scorched Earth зменшена з 20/35/50/65 до 15/30/45/60;
                    </li>
                    <li>
                        Вартість Scorched Earth збільшена з 60/65/70/75 до 60/70/80/90.
                    </li>
                </ul>
                <div>
                    <img

                        src="https://cdn.dota2.com/apps/dota2/images//heroes/drow_ranger_hphover.png"
                        alt=""
                        width="30"
                        height="22"
                    />DROW RANGER
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <ul>
                            <li>
                                Вартість Multishot збільшена з 50/60/70/80 до 50/70/90/110;
                            </li>
                            <li>
                                Багато часу уповільнення від стріл Multishot змінено з 1/2/3/4
                                на 1.25/2/2.75/3.5.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img

                        src="https://cdn.dota2.com/apps/dota2/images//heroes/lone_druid_hphover.png"
                        alt=""
                        width="30"
                        height="22"
                    />&nbsp;LONE DRUID
                </div>
                <ul>
                    <li>
                        Втрата Spirit Bear першого рівня зменшена на 5.
                    </li>
                </ul>
            </div>
            <div>
                <div>
                    <img
                        src="https://cdn.dota2.com/apps/dota2/images//heroes/obsidian_destroyer_hphover.png"
                        alt=""
                        width="30"
                        height="22"
                    />&nbsp;OUTWORLD DEVOURER
                </div>
                <div>
                    <div>
                        <ul>
                            <li>
                                Множина втрати Sanity's Eclipse зменшено з 0.5 до 0.4.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img
                        src="https://cdn.dota2.com/apps/dota2/images//heroes/puck_hphover.png"
                        alt=""
                        width="30"
                        height="22"
                    />PUCK
                </div>
                <ul>
                    <li>Базова шкода зменшена на 2;</li>
                    <li>
                        Виправлений баг, через який атаки від Phase Shift працювали на зомбі
                        з Tombstone;
                    </li>
                    <li>
                        Waning Rift більше не дозволяє вашому герою переміщатися, якщо
                        він знерухомлений (але здатність можна застосувати);
                    </li>
                    <li>
                        Талант 10 рівня змінений з «атакує при застосуванні
                        Phase Shift» на «+30 до шкоди»;
                    </li>
                    <li>
                        Талант 15 рівня змінено з «+90 Damage» на «атакує при
                        застосування Phase Shift».
                    </li>
                </ul>
                <div>
                    <img

                        src="https://cdn.dota2.com/apps/dota2/images//heroes/snapfire_hphover.png"
                        alt=""
                        width="30"
                        height="22"
                    />SNAPFIRE
                </div>
            </div>
            <div>
                <ul>
                    <li>Базова броня зменшена на 1;</li>
                    <li>
                        Перезаряджання Mortimer Kisses збільшено з 90 до 110.
                    </li>
                </ul>
                <div>
                    <img

                        src="https://cdn.dota2.com/apps/dota2/images//heroes/tiny_hphover.png"
                        alt=""
                        width="30"
                        height="22"
                    /> TINY
                </div>
            </div>
            <div>
                <ul>
                    <li>
                        Базова швидкість атаки зменшена з 100 до 90;
                    </li>
                    <li>Приріст сили зменшений з 4.1 до 3.8;</li>
                    <li>
                        Дальність застосування Toss зменшена з 1300 до 1000/1100/1200/1300;
                    </li>
                    <li className="PatchNote">
                        Штраф до швидкості пересування Tree Grab збільшений з 25 до 30.
                    </li>
                </ul>
                <div>
                    <div>
                        <div>
                            <img

                                src="https://cdn.dota2.com/apps/dota2/images//heroes/treant_hphover.png"
                                alt=""
                                width="30"
                                height="22"
                            /> TREANT PROTECTOR
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    <li>Приріст сили зменшений з 3.7 до 3.5;</li>
                    <li>
                        Уповільнення Leech Seed зменшено з 26/34/42/50% до 18/24/30/36%;
                    </li>
                    <li>
                        Вартість Overgrowth збільшена з 150/175/200 до 200/250/300.
                    </li>
                </ul>
                <div>
                    <img

                        src="https://cdn.dota2.com/apps/dota2/images//heroes/ursa_hphover.png"
                        alt=""
                        width="30"
                        height="22"
                    /> URSA
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <ul>
                            <li>
                                Earthshock більше не дозволяє вашому герою переміщатися,
                                якщо він знерухомлений (але здатність можна застосувати).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img

                        src="https://cdn.dota2.com/apps/dota2/images//heroes/vengefulspirit_hphover.png"
                        alt=""
                        width="30"
                        height="22"
                    /> VENGEFUL SPIRIT
                </div>
                <div>
                    <div>
                        <ul>
                            <li>
                                Перезарядка Magic Missile збільшена з 9 до 12/11/10/9;
                            </li>
                            <li>
                                Тривалість анімації Nether Swap збільшено з 0,3 до 0,4.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img

                            src="https://cdn.dota2.com/apps/dota2/images//heroes/viper_hphover.png"
                            alt=""
                            width="30"
                            height="22"
                        /> Viper
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <ul>
                            <li>
                                Вартість Poison Attack збільшено з 20 до 25.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    },
    {
        id: 4,
        tittle: "Патч 7.29c",
        imgurl: "/img/card/update/card-4.jpg",
        cardDescription: "Великі зміни низки героїв та предметів зосереджених на атаку",
        modalDescription: <>
            <div>
                <p>
                    Вранці 12 грудня розробники випустили новий патч для Dota 2
                    -&nbsp;7.23d. В оновленні змінили прирости досвіду та видалили два
                    нейтральний предмет.
                </p>
                <p>

                </p>
                <h3>Список змін</h3>
                <h4 className="SectionHeader">Загальні зміни</h4>
                <ul className="PatchNotesList">
                    <li className="PatchNote">
                        Пасивний приріст золота не збільшується з рівнем героя
                    </li>
                    <li className="PatchNote">
                        На 10 хвилині тепер з'являється одна &nbsp;Tome of Knowledge замість двох
                    </li>
                    <li className="PatchNote">
                        Нагорода досвіду за вбивство тепер дорівнює 40+ поточний досвід * на 0.13
                        (замість &nbsp;40 + поточний досвід * на 0.14)
                    </li>
                    <li className="PatchNote">
                        Приріст досвіду з аванпостів змінено з 18*хвилину на 15*хвилину
                    </li>
                </ul>
                <h4 className="SectionHeader">Зміни предметів</h4>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/elixer_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    /><br/>
                    <div className="ItemName">ELIXIR</div>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Видалений з гри</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/poor_mans_shield_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />
                    <div className="ItemName">POOR MAN'S SHIELD</div>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Бонус до спритності збільшено з 6 до 7</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/iron_talon_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />
                    <div className="ItemName">IRON TALON</div>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Бонус до втрати збільшений з 40% до 50%</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/clumsy_net_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />
                    <div className="ItemName">CLUMSY NET</div>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Тривалість Ensnare зменшена з 2 до 1.75</li>
                        <li className="PatchNote">Бонус до всіх атрибутів збільшено з 5 до 6</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/nether_shawl_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />
                    <div className="ItemName">NETHER SHAWL</div>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">
                            Зниження своєї броні знижено з 4 до 3
                        </li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/greater_faerie_fire_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />
                    <div className="ItemName">GREATER FAERIE FIRE</div>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Бонус до втрати збільшений з 30 до 35</li>
                        <li className="PatchNote">Зцілення зменшено з 500 до 450</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/helm_of_the_undying_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />
                    <div className="ItemName">HELM OF THE UNDYING</div>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Видалений з гри</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/orb_of_destruction_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />
                    <div className="ItemName">ORB OF DESTRUCTION</div>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Зниження броні зменшено з 6 до 5</li>
                        <li className="PatchNote">Більше не проходить крізь імунітет до магії</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/enchanted_quiver_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />
                    <div className="ItemName">ENCHANTED QUIVER</div>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">
                            Бонусна магічна шкода збільшена з 225 до 270
                        </li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/spy_gadget_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />
                    <div className="ItemName">TELESCOPE</div>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Бонус до радіусу атаки збільшено з 125 до 150</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/illusionsts_cape_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />
                    <div className="ItemName">ILLUSIONST'S CAPE</div>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">
                            Тривалість ілюзії збільшена з 20 до 30 секунд
                        </li>
                        <li className="PatchNote">Бонус сили та спритності збільшено з 10 до 14</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/havoc_hammer_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />
                    <div className="ItemName">HAVOC HAMMER</div>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Базова шкода зменшена з 35 до 30</li>
                        <li className="PatchNote">
                            Тепер завдає шкоди у розмірі 175 + 1* силу героя
                        </li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/flicker_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />
                    <div className="ItemName">FLICKER</div>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Тепер дає + 30 до швидкості пересування</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/faerie_fire_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />
                </div>
                <div className="ItemNotes">
                    FAERIE FIRE
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Вартість зменшена з 125 до 70</li>
                        <li className="PatchNote">Бонусна шкода зменшена з 3 до 2</li>
                        <li className="PatchNote">Зцілення зменшено з 100 до 85</li>
                    </ul>
                    <h4 className="SectionHeader">Змінигероїв</h4>
                    <div className="HeroNotes">
                        <img
                            className="HeroImage"
                            src="https://cdn.dota2.com/apps/dota2/images//heroes/bloodseeker_hphover.png"
                            alt=""
                            width="30"
                            height="22"
                        />
                        <div className="HeroName">BLOODSEEKER</div>
                        <div className="HeroAbilities">
                            <div className="HeroAbilityNotes">
                                <ul className="PatchNotesList">
                                    <li className="PatchNote">
                                        Перезаряджання Rupture збільшено з 60 до 70
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="HeroNotes">
                        <img
                            className="HeroImage"
                            src="https://cdn.dota2.com/apps/dota2/images//heroes/crystal_maiden_hphover.png"
                            alt=""
                            width="30"
                            height="22"
                        />
                        <div className="HeroName">CRYSTAL MAIDEN</div>
                        <ul className="PatchNotesList HeroNotesList">
                            <li className="PatchNote">
                                Базова регенерація мани зменшена з 1.5 до 1
                            </li>
                            <li className="PatchNote">
                                Чисельник можливості Arcane Aura собі збільшений з 2 до 3
                            </li>
                        </ul>
                    </div>
                    <div className="HeroNotes">
                        <img
                            className="HeroImage"
                            src="https://cdn.dota2.com/apps/dota2/images//heroes/drow_ranger_hphover.png"
                            alt=""
                            width="30"
                            height="22"
                        />
                        <div className="HeroName">DROW RANGER</div>
                        <div className="HeroAbilities">
                            <div className="HeroAbilityNotes">
                                <ul className="PatchNotesList">
                                    <li className="PatchNote">
                                        Втрата від здатності Multishot зменшена з 95/125/155/185%
                                        до 90/115/140/165%
                                    </li>
                                    <li className="PatchNote">
                                        Талант 15 рівня ослаблений: з +14 до спритності до +12
                                    </li>
                                    <li className="PatchNote">
                                        Талант 25 рівня ослаблений: +50% зменшення перезарядки
                                        здібностей та предметів до +40%
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="HeroNotes">
                        <img
                            className="HeroImage"
                            src="https://cdn.dota2.com/apps/dota2/images//heroes/lina_hphover.png"
                            alt=""
                            width="30"
                            height="22"
                        />
                        <div className="HeroName">LINA</div>
                        <ul className="PatchNotesList HeroNotesList">
                            <li className="PatchNote">Базова шкода зменшена на 2</li>
                        </ul>
                    </div>
                    <div className="HeroNotes">
                        <img
                            className="HeroImage"
                            src="https://cdn.dota2.com/apps/dota2/images//heroes/obsidian_destroyer_hphover.png"
                            alt=""
                            width="30"
                            height="22"
                        />
                        <div className="HeroName">OUTWORLD DEVOURER</div>
                        <div className="HeroAbilities">
                            <div className="HeroAbilityNotes">
                                <ul className="PatchNotesList">
                                    <li className="PatchNote">
                                        Множина втрати від можливості Sanity's Eclipse зменшено з
                                        0.5/0.6/0.7 до 0.5
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="HeroNotes">
                        <img
                            className="HeroImage"
                            src="https://cdn.dota2.com/apps/dota2/images//heroes/treant_hphover.png"
                            alt=""
                            width="30"
                            height="22"
                        />
                        <div className="HeroName">TREANT PROTECTOR</div>
                        <div className="HeroAbilities">
                            <div className="HeroAbilityNotes">
                                <ul className="PatchNotesList">
                                    <li className="PatchNote">
                                        Вартість мани здібності Leech Seed збільшена з 80 до 110
                                    </li>
                                    <li className="PatchNote">
                                        Перезаряджання здібності Leech Seed збільшено з 16/15/14/13
                                        до&nbsp;22/19/16/13
                                    </li>
                                    <li className="PatchNote">
                                        Перезаряджання здатності Overgrowth збільшено з 100/85/70 до
                                        100
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    },
    {
        id: 5,
        tittle: "Патч 7.29b",
        imgurl: "/img/card/update/card-5.jpg",
        cardDescription: "7 грудня розробники випустили новий балансний патч для Dota 2",
        modalDescription: <>

            <div className="PatchSection CenterContents">
                <p>
                    7 грудня розробники випустили новий балансний патч для Dota
                    2 - 7.23c. В оновленні внесли балансні правки до
                    нейтральні предмети, прибрали з гри Third Eye, а також змінили
                    Здібності деяких героїв.
                </p>

                <h4>Список змін</h4>
                <h4 className="SectionHeader">Загальні зміни</h4>
                <ul className="PatchNotesList">
                    <li className="PatchNote">
                        Аванпости тепер дають гравцям 18 досвіду на хвилину замість 25;
                    </li>
                    <li className="PatchNote">
                        Таланти 10 рівня на досвід ослаблені з 20/25/30/40 (більша частина
                        давала 25/30) до 20%;
                    </li>
                    <li className="PatchNote">
                        Таланти 15 рівня досвід ослаблені з 35/40/50 до 35%;
                    </li>
                    <li className="PatchNote">
                        Тривалість роботи Glyph на крипах скорочено з 7 до 4 секунд;
                    </li>
                    <li className="PatchNote">
                        Власний блок втрати тепер знову працює проти юнітів гравця
                        (Діють такі ж правила, як і зі звичайним блоком шкоди);
                    </li>
                    <li className="PatchNote">
                        Вроджений блок втрати змінено зі 100% на 8 блоків на 50% на 16
                        блоків;
                    </li>
                    <li className="PatchNote">
                        Природжений блок втрати більше не складається з іншими блоками;
                    </li>
                    <li className="PatchNote">
                        Заблоковані речі у кур'єрі більше не будуть доставлені та не будуть
                        повернені до схованки;
                    </li>
                    <li className="PatchNote">
                        Базова швидкість пересування кур'єра збільшена з 275 до 280;
                    </li>
                    <li className="PatchNote">
                        Нейтральні предмети більше не випадають із крипів, якщо в радіусі 600
                        од. перебуває ворог.
                    </li>
                </ul>
            </div>
            <hr/>

            <div className="PatchSection CenterContents">
                <h4 className="SectionHeader">Зміни предметів</h4>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/travel_boots_lg.png"
                        alt=""
                        width="30"
                        height="22"
                    />&nbsp;BOOTS OF TRAVEL
                    <ul className="PatchNotesList">
                        <li className="PatchNote">
                            Тривалість телепортації на аванпости тепер завжди займає 6
                            секунд.
                        </li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/bracer_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;BRACER
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Вартість рецепту знижена з 215 до 210.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/buckler_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;BUCKLER
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Вартість рецепту збільшена з 250 до 300.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/ancient_janggo_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;DRUM OF ENDURANCE
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Бонус до всіх атрибутів знижений з 6 до 4.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/enchanted_quiver_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;ENCHANTED QUIVER
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Бонусна шкода збільшена з 175 до 225.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/essence_ring_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;ESSENCE RING
                    <ul className="PatchNotesList">
                        <li className="PatchNote">
                            Бонус до здоров'я при використанні збільшено з 375 до 425;
                        </li>
                        <li className="PatchNote">Час перезаряджання зменшено з 25 до 20.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/greater_faerie_fire_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;GREATER FAERIE FIRE
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Кількість зарядів збільшена з 2 до 3.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/grove_bow_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;GROVE BOW
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Тепер дає +10 до швидкості атаки;</li>
                        <li className="PatchNote">
                            Тривалість дебаффа зменшена з 10 до 6.
                        </li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/havoc_hammer_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;HAVOC HAMMER
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Більше не підвищує базовий інтервал атаки;</li>
                        <li className="PatchNote">Бонусна шкода зменшена з 60 до 35.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/illusionsts_cape_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;ILLUSIONST'S CAPE
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Тепер дає +10 до сили і +10 до спритності.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/imp_claw_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;IMP CLAW
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Час перезаряджання зменшено з 10 до 8.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/mind_breaker_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;MIND BREAKER
                    <ul className="PatchNotesList">
                        <li className="PatchNote">
                            Тривалість безмовності зменшена з 4 до 2 секунд.
                        </li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/null_talisman_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;NULL TALISMAN
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Вартість рецепту знижена з 215 до 210.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/repair_kit_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;REPAIR KIT
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Тепер дає +13 до регенерації здоров'я.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/ward_sentry_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;SENTRY WARD
                    <ul className="PatchNotesList">
                        <li className="PatchNote">
                            Інтервал появи нового варда в лавці зменшено з 95 до 90.
                        </li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/silver_edge_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;SILVER EDGE
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Бонусна шкода збільшена з 36 до 40.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/spy_gadget_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;TELESCOPE
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Розряд предмета змінено з&nbsp;4 на 3.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/third_eye_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;THIRD EYE
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Видалений з гри.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/vampire_fangs_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;VAMPIRE FANGS
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Вампіризм збільшено з 14% до 15%.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/vladmir_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;VLADMIR'S OFFERING
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Вартість рецепту збільшена з 350 до 450.</li>
                    </ul>
                </div>
                <div className="ItemNotes">
                    <img
                        className="ItemImage"
                        src="https://cdn.dota2.com/apps/dota2/images//items/wraith_band_lg.png"
                        alt=""
                        width="30"
                    />&nbsp;WRAITH BAND
                    <ul className="PatchNotesList">
                        <li className="PatchNote">Вартість рецепту знижена з 215 до 210.</li>
                    </ul>
                </div>
            </div>
        </>
    },
    {
        id: 6,
        tittle: "Патч 7.29a",
        imgurl: "/img/card/update/card-6.jpg",
        cardDescription: "У ньому змінили розподіл золота через вбивства, переробили режим All Pick",
        modalDescription:
            <>
                <div className="PatchSection CenterContents">
                    <h4 className="SectionHeader">Загальні зміни</h4>
                    <ul className="PatchNotesList">
                        <li>
                            Перероблено вибір героїв у режимі All Pick. Тепер він проходить о п'ятій
                            раундів, у кожному з яких обидві сторони вибирають по одному герою. Їх
                            вибір прихований до наступного раунду. Якщо два гравці виберуть одного
                            героя, він дістанеться тому, хто взяв його першим. Другий гравець
                            отримає додатковий час на вибір іншого героя.
                        </li>
                        <li>
                            Перероблено стадію заборони героїв у режимі All Pick. Раніше після неї
                            заборонялася половина запропонованих героїв, тепер же кожен із них
                            може бути заборонено з шансом 50%. Якщо гравці запропонували менше
                            десяти героїв, інші будуть номіновані на заборону
                            автоматично, виходячи із частоти заборони на даному рівні рейтингу.
                        </li>
                        <li className="PatchNote">
                            Перша руна посилення тепер з'являється о 4:00 (потім - кожні 2
                            хвилини, як завжди).
                        </li>
                        <li className="PatchNote">
                            Тепер після 40:00 на річці не з'являються дві руни посилення.
                        </li>
                        <li className="PatchNote">
                            Убрано балансування нагороди за вбивство, зав'язане на загальній
                            цінності команд (формула перероблена та спрощена, подробиці нижче).
                        </li>
                    </ul>
                    <hr/>
                    <h5 className="PatchNote">
                        Попередній розподіл золота в радіусі вбивства:
                    </h5>
                    <div className="PatchNote">
                        - Множник позиції: від 1,6 до 0,4 (залежить від позиції вбивці за загальною
                        цінності у його команді);
                    </div>
                    <div className="PatchNote">
                        - Множник відставання: від 1,2 до 0,6 (залежить від позиції жертви за
                        загальної цінності у її команді);
                    </div>
                    <div className="PatchNote">
                        - Множина відіграшу: 1 (якщо команда відстає) або 0 (якщо команда
                        лідирує).
                    </div>
                    <ul>
                        <li className="PatchNote">
                            1 герой: Помножувач відставання * Помножувач позиції * (126 + 4,5 *
                            Рівень жертви + Множина відіграшу * ( Загальна цінність жертви * 0,026
                            + 70)/1);
                        </li>
                        <li className="PatchNote">
                            2 героя: Множник відставання * Множник позиції * (63 + 3,6 *
                            Рівень жертви + Множина відіграшу * ( Загальна цінність жертви * 0,026
                            + 70)/2);
                        </li>
                        <li className="PatchNote">
                            3 героя: Множник відставання * Множник позиції * (31,5 + 2,7 *
                            Рівень жертви + Множина відіграшу * ( Загальна цінність жертви * 0,026
                            + 70)/3);
                        </li>
                        <li className="PatchNote">
                            4 героя: Множник відставання * Множник позиції * (22,5 + 1,8 *
                            Рівень жертви + Множина відіграшу * ( Загальна цінність жертви * 0,026
                            + 70)/4);
                        </li>
                        <li className="PatchNote">
                            5 героїв: Множник відставання * Множник позиції * (8 + 0,9 *
                            Рівень жертви + Множина відіграшу * ( Загальна цінність жертви * 0,026
                            + 70)/5).
                        </li>
                    </ul>
                    <hr/>
                    <h5 className="PatchNote">Новий розподіл золота в радіусі вбивства:</h5>
                    <ul>
                        <li className="PatchNote">
                            (50+ Загальна цінність жертви * 0,03) / Число героїв.
                        </li>
                    </ul>
                    <p></p>
                    <ul className="PatchNotesList">
                        <li>
                            Золото за переривання серії вбивств збільшено з 60-480 до
                            200-&gt;690;
                        </li>
                        <li>
                            Досвід за переривання серії вбивств збільшено з 400-1800 до
                            500-2040.
                        </li>
                    </ul>
                    <ul className="PatchNotesList">
                        <li>
                            Число заборон на фазу в режимі Captain's Mode змінено з 3/2/1 на
                            4/1/1;
                        </li>
                        <li>
                            Кількість доступних героїв у режимі Random Draft зменшено з 50 до 40.
                        </li>
                    </ul>
                    <ul className="PatchNotesList">
                        <li className="PatchNote">
                            Тепер легше зробити так стародавніх крипів на стороні сил Світу;
                        </li>
                        <li className="PatchNote">
                            Шанс отримання нейтральних предметів 1 розряду збільшено з 10 до 14%;
                        </li>
                        <li className="PatchNote">Втрата фонтану збільшена з 275 до 300;</li>
                        <li className="PatchNote">
                            Ice Armor у огра-чарівника: уповільнення зменшено з 30 до 25;
                        </li>
                        <li className="PatchNote">
                            Ice Armor у огра-чарівника: додаткова броня зменшена з 6 до 5;
                        </li>
                        <li className="PatchNote">
                            Руна ілюзій тепер має ті ж таки ефекти, що і Manta Style (зміна
                            позиції, розвіювання, ухиляння від снаряда).
                        </li>
                    </ul>
                </div>
            </>
    },
    {
        id: 7,
        tittle: "Патч 7.29",
        imgurl: "/img/card/update/card-7.jpg",
        cardDescription: "Введення нового героя та зміна ладшафту",
        modalDescription: <>
            <p>Увечері 9 квітня у Dota 2 вийшов патч 7.29. З оновленням у грі збалансували багатьох персонажів та
                предмети, зміни торкнулися ландшафту. Розробники також додали нового героя — Dawnbreaker — і
                руну.</p>

            <h4 className="SectionHeader">Загальні зміни</h4>

            <ul>
                <li className="patchnotespage_Note_eSxyZ">
                    Ландшафт зазнав множинних змін
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Додано руну води. Вона з'являється на обох точках рун посилення, але
                    тільки на другій та четвертій хвилинах гри. Вона миттєво відновлює
                    100 здоров'я та 80 мани, і їй можна наповнити сулія. З шостої хвилини
                    руни з'являються по одній, як раніше.
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Додано можливість отримати +2 до всіх атрибутів при підвищенні
                    рівня. Усього це можна зробити 7 разів (за кількістю порожніх рівнів з 1 по
                    26) будь-коли, натиснувши на гурток дерева талантів. Бонус до атрибутів
                    дається автоматично, якщо немає інших варіантів.
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Тридцятий рівень більше не відкриває всі таланти, що залишилися. Замість
                    цього рівня 27/28/29/30 будуть відкривати
                    таланти 10/15/20/25 рівня відповідно.
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Аванпости більше не дають досвіду кожні 10 хвилин
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Тепер аванпости щохвилини дають своїй команді рівний досвід (хвилина.
                    ігри)*2. Як і раніше, якщо команда захопила обидва аванпости, вона
                    отримує досвід лише за один із них.<br/>Примітки:<br/>Якщо порівняти
                    кількість досвіду, яку гравці раніше отримували на 10/20/30/40 хвилині,
                    то сумарне значення змінилося з 150/500/1050/1800
                    110/420/930/1640
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Досвід дається на початку кожної хвилини
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    У перші десять хвилин дається 2/4/6/8/10/12/14/16/18/20 досвіду
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Золото за всі руни багатства, крім перших, зменшено на 10%
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Руни багатства не з'являються на річці. Золото, яке вони
                    надавали, тепер автоматично видається у вигляді щохвилини
                    заробітку.
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Тепер руни багатства з'являються тільки в лісових точках, але кожні 3
                    хвилини (тепер у грі всього 2 руни багатства)
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Тепер нова руна багатства не замінює не підібрану стару, а
                    з'являється поруч із нею
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Тепер на нульовій хвилині руни багатства з'являються на своїх місцях у
                    лісу і в точках появи рун посилення (всього 4 руни багатства на початку
                    ігри)
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Багато талантів, предметів і заклинань, що дають бонус до швидкості
                    пересування або дальність застосування заклинань були або замінені,
                    або ослаблені (докладніше про це в розділах «Предмети» та «Герої»)
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Золото за допомогу у вбивстві тепер коректується відносною
                    різницею у цінності між двома командами. Наприклад, якщо ваша команда
                    відстає на 5000 золота, а загальна цінність ворожої команди становить 50
                    000, то нагорода за допомогу у вбивстві буде на 10% вищою.
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Тепер кожен герой починає гру з одним сувоєм телепортації замість
                    трьох
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Тепер кожен герой отримує один сувій телепортації при смерті
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Вартість зсуву телепортації збільшено з 90 до 100 золота
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    У героїв, швидкість повороту яких дорівнювала 1,0, вона зменшена до 0,9
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    У героїв, швидкість повороту яких дорівнювала 0,5, вона збільшена до 0,6
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Вплив швидкості повороту героя на час повороту збільшено на 20%
                </li>


                <li className="patchnotespage_Note_eSxyZ">
                    Базовий час телепортації до аванпосту зменшено з 6 до 5 секунд
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Радіус огляду аванпоста зменшений з 700 до 500
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Режим Captains Mode: порядок першої стадії вибору змінено з 1/2/1/2 на
                    1/2/2/1
                </li>

                <li className="patchnotespage_Note_eSxyZ">
                    Кур'єри більше не дають огляд у лігві Рошана
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Тепер будь-який гравець може знищити союзний вард навіть із повним
                    здоров'ям, якщо він встановлений у таборі нейтральних крипів
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    У всіх нейтральних крипів, крім Стародавніх големів, броня збільшена на 1
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Тепер нейтральні предмети летять у бік героя, що знайшов їх, а не
                    з'являються під мертвим крипом
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Кількість героїв, що забороняються, в рейтинговому режимі All Pick збільшено на 6
                    (їхня заборона все ще проходить випадковим чином)
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Вартість викупу в золоті зменшена з (200+ цінність/12) на (200+
                    цінність/13)
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Час відродження кур'єра в секундах змінено з (60 + 7 * рівень) на (60
                    + 6 * рівень)
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Захист від обходу: зменшення втрат посилено з 40% до 50%
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Дальність передачі предметів між героями збільшена зі 150 до 300
                </li>
                <li className="patchnotespage_Note_eSxyZ">
                    Час повторної появи дерев зменшено з 5 до 3 хвилин.
                </li>
            </ul>
        </>
    },
    {
        id: 8,
        tittle: "Патч 7.28a",
        imgurl: "/img/card/update/card-8.jpg",
        cardDescription: "Незначні зміни героїв та предметів ослаблення веж обох сторін",
        modalDescription: <>
            <p></p>
            <h4 className="SectionHeader">Загальні зміни</h4>
            <ul className="PatchNotesList">
                <li className="PatchNote">
                    Базовий досвід за вбивство героя збільшено з 40 до 100;
                </li>
                <li className="PatchNote">
                    Базове золото за добивання героя збільшено з (99 + 7,2 * рівень) до
                    (120 + 8* рівень);
                </li>
                <li className="PatchNote">
                    Золото за допомогу збільшено з (45+0,033* цінність) до (30+0,038*)
                    цінність);
                </li>
                <li className="PatchNote">
                    Пасивний приріст золота збільшено з 85 до 95 за хвилину;
                </li>
                <li className="PatchNote">
                    Золото за руни багатства тепер вважається надійним;
                </li>
                <li className="PatchNote">
                    Золото за добивання першої/другої/третьої/четвертої вежі змінено з
                    180 на 120/140/160/180;
                </li>
                <li className="PatchNote">
                    Нагорода за рахунок нейтральних крипів збільшена з 35% до 40%.
                </li>
            </ul>
            <p></p>
            <ul className="PatchNotesList">
                <li className="PatchNote">
                    Табори нейтральних кріпів поруч із центральною лінією змінені із середніх
                    на малі;
                </li>
                <li className="PatchNote">Прибрано табір із стародавніми мародерами;</li>
                <li className="PatchNote">
                    Змінено розташування дерев у низинах поруч із аванпостами, щоб їх
                    не можна було захоплювати, не зрубавши дерева;
                </li>
                <li className="PatchNote">
                    Прибрано одне з дерев, щоб зробити прохід праворуч від першої
                    центральної вежі сил Світла;
                </li>
                <li className="PatchNote">
                    Середній табір праворуч від потайної лави сил Світу став складним;
                </li>
                <li className="PatchNote">
                    Поміняні місцями два табори крипів: складний праворуч від другої верхньої
                    вежі сил Світу та стародавній в основному лісі;
                </li>
                <li className="PatchNote">
                    Зменшено зону появи кріпів у складному таборі поруч із легкою лінією
                    сил Світла;
                </li>
                <li className="PatchNote">
                    Зона появи крипів у маленькому таборі поруч із легкою лінією
                    сил&nbsp;Світла розширена;
                </li>
                <li className="PatchNote">
                    Зона появи кріпів у маленькому таборі поруч із легкою лінією сил
                    Темряви зменшено.
                </li>
            </ul>
            <p></p>
            <ul className="PatchNotesList">
                <li className="PatchNote">
                    Аванпости тепер не можуть бути захоплені іншою командою доти,
                    поки що противник не знищить хоча б одну тир-2 вежу;
                </li>
                <li className="PatchNote">
                    Аванпости тепер виявляють супротивника, який їх захоплює;
                </li>
                <li className="PatchNote">
                    Радіус видимості аванпостів відображається, якщо затиснути Alt.
                </li>
            </ul>
            <p></p>
            <ul className="PatchNotesList">
                <li className="PatchNote">
                    Всі лінійні кріпи тепер не реагують на агр героїв доти, доки
                    вони не знаходяться поряд з кріпами супротивника, нейтральними кріпами чи не
                    перебувають у радіусі 1550 від їхньої тир-1 вежі.
                </li>
            </ul>
            <p></p>
            <ul className="PatchNotesList">
                <li className="PatchNote">
                    Нагорода за кур'єра знижена з 30 + 7/Рівень до 25 + 5/Рівень;
                </li>
                <li className="PatchNote">
                    Необхідний рівень підвищення кур'єра знижений з 5 до 4;
                </li>
                <li className="PatchNote">
                    Швидкість пересування кур'єра знижується до 15% під час перевезення
                    розхідників.
                </li>
            </ul>
            <p></p>
            <ul className="PatchNotesList">
                <li className="PatchNote">
                    Броня тепер розраховується за такою формулою: & nbsp; Броня * 0.06 / (
                    1+&nbsp;Броня * 0.06);
                </li>
                <li className="PatchNote">
                    Бонус до броні за одиницю спритності збільшений з 0.16 до 1/6.
                </li>
            </ul>
            <p></p>
            <ul className="PatchNotesList">
                <li className="PatchNote">
                    Швидкість атаки тир-1&nbsp;вежі збільшена&nbsp;(частота атаки з 1.0 до
                    0.9 та базова швидкість атаки зі 100 до 110);
                </li>
                <li className="PatchNote">
                    Втрата тир-1 веж знижена зі 110 до 90 (збиток в секунду залишився
                    колишнім);
                </li>
                <li className="PatchNote">
                    Швидкість атаки тир-2+ веж збільшено (частота атаки з 0.95 to 0.9, та
                    базова швидкість атаки зі 100 до 110);
                </li>
                <li className="PatchNote">
                    Втрата тир-2+ веж знижена з 200 до 172 (збиток в секунду залишився
                    колишнім);
                </li>
                <li className="PatchNote">Здоров'я облогових юнітів збільшено на 60.</li>
            </ul>
            <p></p>
            <ul className="PatchNotesList">
                <li className="PatchNote">
                    Перероблено стадію драфта в режимі All Pick. Кожна команда тепер
                    вибирає два герої за стадію до того, як покаже їх. У фінальному
                    раунді залишається один пік (замість 1/1/1/1/1 тепер 2/2/1);
                </li>
                <li className="PatchNote">
                    Кількість банів у режимі All Pick збільшено з 10 до 12;
                </li>
                <li className="PatchNote">
                    У перших двох стадіях режиму All Pick тепер є 5
                    секунд на вибір героя;
                </li>
                <li className="PatchNote">
                    Кількість банів у режимі Captain's Mode перероблено: замість 4/1/1
                    тепер 2/3/2;
                </li>
                <li className="PatchNote">
                    Кількість часу на пік і бан в режимі Captain's Mode знижено з
                    35 секунд до 30;
                </li>
                <li className="PatchNote">
                    Перша стадія піків у режимі Captain's Mode раніше мала
                    послідовність&nbsp;Світло/Тьма/Тьма/Світло. Тепер вона має вигляд
                    Світло/Темрява/Світло/Темрява (якщо у Radiant перший пік);
                </li>
                <li className="PatchNote">
                    Третя стадія банів як Captain's Mode раніше мала вигляд Темрява/Світло.
                    Тепер послідовність наступна: Світло/Тьма/Світло/Тьма;
                </li>
                <li className="PatchNote">
                    Кількість героїв у режимі Random Draft знижено з 40 до 33.
                </li>
            </ul>
            <ul>
                <li className="PatchNote">
                    Радіус випадання нейтральних предметів поруч із противником збільшено
                    900 до 1200;
                </li>
                <li className="PatchNote">
                    Нейтральні предмети більше не випадають, якщо
                    найближчий герой-джерело вбивства телепортується;
                </li>

                <li className="PatchNote">
                    Тепер посилення вампіризму розраховується за спаданням, а не
                    складається;
                </li>
                <li className="PatchNote">
                    Тепер посилення регенерації здоров'я розраховується за
                    спаданням, а не складається;
                </li>
                <li className="PatchNote">
                    Тепер посилення лікування розраховується за спаданням, а не
                    складається;
                </li>
                <li className="PatchNote">
                    Тепер посилення вампіризму від здібностей розраховується за
                    спаданням, а не складається.
                </li>
            </ul>
        </>
    },
    {
        id: 9,
        tittle: "Патч 7.27",
        imgurl: "/img/card/update/card-9.jpg",
        cardDescription: "Зміни початку гри нейтралів та героїв сили і захисту",
        modalDescription: <>
            <p></p>
            <h3>Загальне</h3>
            <ul>
                <li>
                    Тепер гра розпочинається вночі. У момент виходу крипів починається день;
                </li>
                <li>
                    Нагорода за вбивство нейтральних крипів більше не збільшується з часом;
                </li>
                <li>
                    Нагорода для героя, який стакнув нейтральних кріпів, зменшено з 40% до
                    30%;
                </li>
                <li>Приріст броні Рошана збільшено з 0,325 до 0,375;</li>
                <li>
                    Табір стародавніх крипів на боці сил Світу тепер простіше стикати;
                </li>
                <li>Додано сюжетні описи для всіх предметів;</li>
                <li>
                    Змінено розташування предметів в інтерфейсі лавки: переважно порядок
                    змінено відповідно до змін цін, але деякі предмети перейшли до інших
                    категорій. Витрачені предмети залишилися на колишніх місцях;
                </li>
                <li>
                    Під час збирання предмети займатимуть ті осередки інвентарю, в яких
                    знаходився предмет із найбільш схожим активним ефектом. Так, Magic Wand
                    з'явиться в осередку Magic Stick, Bloodthorn з'явиться в осередку Orchid
                    Malevolence і так далі.
                </li>
            </ul>
            <h3>Баланс нейтральних істот</h3>
            <ul>
                <li>Опір магії у давніх крипів зменшено з 70% до 50%;</li>
                <li>
                    Стародавній громозавр: застосування можливості Frenzy більше не
                    перериває рух;
                </li>
                <li>
                    Стародавній громозавр: застосування можливості Slam більше не перериває
                    рух;
                </li>
                <li>
                    Стародавній громозавр: утрата здатності Slam збільшена з 70 до 250;
                </li>
                <li>
                    Стародавній громозавр: уповільнення від можливості Slam збільшено з 25%
                    до 60%;
                </li>
                <li>
                    Стародавній громозавр: радіус здатності Slam збільшений з 250 до 350;
                </li>
                <li>
                    Стародавній громозавр: здатність War Drums Aura віддана стародавньому
                    грохозавру;
                </li>
                <li>Виправлено некоректну роботу War Drums Aura;</li>
                <li>Стародавній гранітний голем: розмір моделі збільшено;</li>
                <li>
                    Древній дракон: перезаряджання здібності Fireball збільшено з 10 до 15
                    секунд;
                </li>
                <li>Важник вовків: рівень збільшений з 4 до 5;</li>
                <li>Примара: базовий інтервал атак збільшено з 1 до 1,2 секунди.</li>
            </ul>
            <p></p>
            <h3>Зміна героїв</h3>
            <Row>
                <Col className={"col-xl-4 col-md-12"}>
                    <h4>Abadon</h4>
                    <img src="./img/card/update/heroes/abadon.jpg" alt="abadon"/>
                </Col>
                <Col className={"col-xl-8 col-md-12"}>
                    <li>Aphotic Shield: затримка перед застосуванням зменшена з 0,4 до 0,3 секунди;</li>
                    <li>Borrowed Time: тривалість зі скіпетром збільшена з 5/6/7 до 6/7/8 секунд;</li>
                    <li>Талант 15 рівня: бонус до втрати/лікування від Mist Coil збільшений з 48 до 50;</li>
                    <li>Талант 15 рівня: «+6 до броні» замінено на «+65 до шкоди»;</li>
                    <li>Талант рівня 20: «+80 до втрати» замінено на «+8 до броні»;</li>
                    <li>Талент 25 рівня: радіус застосування Mist Coil збільшено з 375 до 425.</li>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-xl-4 col-md-12"}>
                    <h4>Alchemist</h4>
                    <img src="./img/card/update/heroes/Alchemist.jpg" alt="Alchemist"/>
                </Col>
                <Col className={"col-xl-8 col-md-12"}>
                    <li>Unstable Concoction: витрата мани зменшена з 120 до 90/100/110/120;</li>
                    <li>Unstable Concoction: перезаряджання зменшено з 22/20/18/16 до 16 секунд;</li>
                    <li>Acid Spray: шкода в секунду збільшена з 15/20/25/30 до 20/25/30/35;</li>
                    <li>Acid Spray: тепер шкода завдається негайно, а не після секундної затримки;</li>
                    <li>Greevil's Greed: максимум додаткового золота зменшено з 18/22/26/30 до 18/21/24/27
                        (необхідна кількість добивань знижена з 5/7/8/9 до 5/6/7/8);
                    < /li>
                    <li>Якщо розплавити Aghanim's Scepter для союзника, який вже має цей предмет або його
                        поліпшення, витрачені на нього 4200 або 5800 золота повернуться власнику;
                    </li>
                    <li>Розплавлений Aghanim's Scepter дає союзнику всі бонуси до характеристик;</li>
                    <li>Додаткові збитки від атак і заклинань за скіпетр зменшено з 30 і 6% до 20 і 5% відповідно
                    </li>
                    <li>Талент 20 рівня: бонус до прорубних збитків зменшено з 30% до 25%.</li>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-xl-4 col-md-12"}>
                    <h4>Axe</h4>
                    <img src="./img/card/update/heroes/Axe.jpg" alt="Axe"/>
                </Col>
                <Col className={"col-xl-8 col-md-12"}>
                    <li>Battle Hunger: дальність застосування змінена з 750 до 700/775/850/925;</li>
                    <li><span
                        className="reworked-scepter">Змінено покращення від Aghanim's Scepter.</span>&nbsp;Покращує
                        Berserker's Call. Тепер вона застосовує на жертву ефект здібності Battle Hunger. Також
                        Battle Hunger зменшує броню жертв на 7, а власник здібності отримує 7 броні за кожного героя
                        під її дією (удвічі менше за крипів). Зменшує перезарядку Berserker's Call на 2 секунди;
                    </li>
                    <li>Талант 10 рівня: «+20 до швидкості пересування» замінено на «+1,75 мани в секунду»; +2 мани
                        в секунду» замінено на «+25 до швидкості пересування»;
                    </li>
                    <li>Талант 15 рівня: «Counter Helix спрацьовує від своїх атак» замінено на «+300 до здоров'я».
                    </li>
                </Col>
            </Row>
            <p></p>

        </>

    },];


export const HeroesList = [
    {
        id: 1,
        tittle: "Abadon",
        imgurl: "./img/card/Heroes/abadon/abadon.jpg",
        cardDescription: "Abaddon - який завжди готовий як надати підтримку і стати лідером",
        modalDescription: <>
            <p></p>
            <h3>Історія</h3>
            <p>
                Рід Аверно живить купіль - розлом у земній тверді, що випромінює
                загадкову енергію протягом поколінь. Кожного новонародженого сім'ї
                занурюють у цей темний туман, даруючи тим самим зв'язок із їхньою землею та її
                загадковою силою. Діти ростуть з непохитною вірою у захист сімейних
                цінностей та традицій землі, але насправді вони охороняють саму купіль,
                справжні наміри якої невідомі. Коли новонароджений Abaddon
                проходив обряд хрещення, щось пішло негаразд. В очах малюка блиснула
                іскра розуму, що злякала всіх присутніх і примусила жерців
                шепотітися. Його вирощували, щоб він пішов шляхом всіх синів роду: війна і
                захист батьківщини на чолі з армією. Але сам Abaddon приділяв цьому не так багато
                уваги. Поки інші тренувалися у поводженні зі зброєю, він медитував
                біля купелі. Він глибоко вдихав темний туман, навчаючись бути єдиним із тією силою,
                що протікала глибоко під землею його будинку. Зрештою він став
                породженням чорного туману. Рід Аверно несхвально поставився до такого
                рішенню, звинувачуючи його у зневазі обов'язками. Але всі ці звинувачення
                припинилися, коли Abaddon вступив у свою першу битву і показав ту
                набуту владу над життям і смертю, про яку інші члени роду не
                могли й мріяти.
            </p>
            <p></p>
            <h3>Навички</h3>
            <p></p>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/abadon/ability1.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12"}>
                    <p><h4>Mist Coil </h4> Ціною власного здоров'я випускає смертельний туман, який завдає
                        шкоду ворогові або лікує союзника.
                    </p>
                </Col>
            </Row>
            <Row>
                <div>
                    <p>
                        Дальність застосування:&nbsp;575<br/>
                        Радіус:

                        0 (Талант:&nbsp;500) <br/>
                        Втрата по собі:&nbsp;55/80/105/130
                        (Талант:&nbsp;82,5/107,5/132,5/157,5)<br/>
                        Втрата:&nbsp;110/160/210/260
                        (Талант:&nbsp;165/215/265/315)<br/>
                        Лікування:&nbsp;110/160/210/260
                        (Талант:&nbsp;165/215/265/315)
                    </p>
                </div>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/abadon/ability2.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Aphotic Shield </h4> Оточує союзника щитом із темної енергії, який поглинає кілька втрат.
                        Якщо щит пропаде або його знищать, він вибухне і завдасть ворогам навколо шкоди, що дорівнює
                        здоров'ю щита. Застосування знімає з мети оглушення та більшість негативних ефектів.
                    </p>
                </Col>
            </Row>
            <Row>
                <div>
                    <p>
                        Дальність застосування: 550<br/>
                        Радіус вибуху:

                        675 <br/>
                        Поглинання збитків: 110/140/170/200
                        (Талант: 210/240/270/300)<br/>
                        Втрата по області:> 110/140/170/200
                        (Талант: 210/240/270/300)<br/>
                        Тривалість: 15
                    </p>
                </div>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/abadon/ability3.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Curse of Avernus </h4>Атаки героя уповільнюють пересування жертви. Якщо атакувати ворога
                        4 рази, на нього спрацює прокляття, що заморожує: воно накладає безмовність і уповільнення,
                        а всі атакуючі цього ворога істоти отримують додаткову швидкість атаки.
                    </p>
                </Col>
            </Row>
            <Row>
                <div>
                    <p>Ударів потрібно:4 (Талант:3)<br/> Базове
                        уповільнення швидкості пересування: 10/15/20/25 % (Aghanim's
                        Shard:;20/25/30/35%)<br/>Уповільнення швидкості
                        пересування: 15/30/45/60%<br/>Додат. швидкість
                        атаки: 40/60/80/100<br/>Базова тривалість: 5<br/>Тривалість
                        прокляття: 4,5<br/> Тривалість прискорення: 4</p></div>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/abadon/ability4.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Borrowed Time </h4>
                        Звертає всі збитки в лікування. Застосування знімає більшість негативних ефектів. Якщо
                        здатність готова, вона спрацює автоматично, як тільки здоров'я власника впаде нижче 400.
                    </p>
                </Col>
            </Row>
            <Row>
                <div>
                    <p>Поріг здоров'я: 400<br/> Тривалість: 4/5/6</p></div>
            </Row>

        </>
    },
    {
        id: 2,
        tittle: "Axe",
        imgurl: "./img/card/Heroes/axe/axe.jpg",
        cardDescription: "герой-ініціатор, що розкриває себе на 3-й позиції у складній лінії.",
        modalDescription: <>
            <p></p>
            <h3 className="subtitle-global-text">Історія</h3>
            <p>
                Ще будучи рядовим бугаєм в армії Червоного туману, Могул Хан мріяв про звання генерала Червоного
                туману.
                Битву за битвою він найкривавішими способами доводив власну перевагу. Його стрімкому зльоту
                кар'єрними
                сходами не раз сприяла та обставина, що йому нічого не варто було обезголовити свого начальника. Під
                час
                семирічної кампанії на Тисячоболотті він відзначився у кровопролитних бійнях, а зірка його слави
                засяяла ще
                яскравіше, тоді як його соратників незмінно скорочувалося. Вночі найбільшої перемоги він проголосив
                себе
                генералом Червоного туману і взяв собі найвищий титул - Axe. Однак у його загоні тепер не було
                жодного
                воїна. Багато бійців були повалені ворогом, але й від леза Axe загинуло не менше. Чи варто говорити,
                що
                більшість солдатів нізащо не переманити під його прапори? Але Axe це не бентежить, адже він знає, що
                в бою
                можна покластися тільки на самого себе.
            </p>
            <p></p>
            <h3>Навички</h3>
            <p></p>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/axe/ability1.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12"}>
                    <p><h4>Berserker's Call</h4> Герой кидає виклик найближчим ворогам, змушуючи їх атакувати його,
                        і навіть
                        отримує бонус до броні на час дії здібності.
                    </p>
                </Col>
            </Row>
            <Row>
                <div className="features-editor-area__item">
                    <p>Радіус: 300 (Талант:400) <br/> Додаткова
                        броня: 30 <br/> Тривалість: 2/2,4/2,8/3,2
                    </p></div>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/axe/ability2.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Battle Hunger </h4> Приводить ворога в сказ, сповільнюючи його і завдаючи йому шкоди,
                        поки він когось не вб'є або дія здібності не закінчиться. Герой отримує бонус до швидкості
                        пересування за кожну істоту під впливом цієї здібності. Бонус за крипів вдвічі менший.
                    </p>
                </Col>
            </Row>
            <Row>
                <div>
                    <p>Тривалість: 12<br/>Дальність
                        застосування:700/775/850/925<br/> Уповільнення
                        пересування: 12/13/14/15% Додаткова
                        швидкість:12/13/14/15% <br/> Втрата в секунду: 16/24/32/40
                        (Талант: 116/124/132/140)
                    </p>
                </div>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/axe/ability3.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Counter Helix</h4>Герой з деякою ймовірністю відповідає на удари супротивників, завдаючи
                        чистої шкоди всім ворогам навколо себе.
                    </p>
                </Col>
            </Row>
            <Row>
                <div className="features-editor-area__item">
                    <p>
                        Втрата: 60/100/140/180(Талант:90/130/170/210)<br/>
                        Радіус: 275 <br/> Шанс
                        спрацьовування: 17/18/19/20%(Aghanim's
                        Shard:27%/28 %/29%/30%)</p></div>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/axe/ability4.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Culling Blade</h4>
                        Герой кидається на ослаблого супротивника, миттєво вбиваючи мету, якщо вона має низький
                        рівень здоров'я. В іншому випадку удар завдасть лише невеликої шкоди. Герой та його союзники
                        поблизу отримають додаткову швидкість, а здатність миттєво відновиться, якщо їй вбити
                        ворожого героя.
                    </p>
                </Col>
            </Row>
            <Row>
                <div className="features-editor-area__item">
                    <p>Кордон вбивства:250/350/450
                        (Талант:400/500/600)<br/> Втрата: 150/250/300 <br/>
                        Додаткова швидкість пересування при вбивстві: 30% <br/> Додаткова
                        швидкість атаки при вбивстві: 30 <br/> Тривалість прискорення при
                        вбивстві : 6 <br/> Радіус прискорення при
                        вбивстві: 900<br/>Дальність застосування:> 150</p>
                </div>
            </Row>

        </>
    },
    {
        id: 3,
        tittle: "Slark",
        imgurl: "./img/card/Heroes/slark/slark.jpg",
        cardDescription: "Керрі-герой, що володіє високою мобільністю та виживанням",
        modalDescription: <>
            <p></p>
            <h3 className="subtitle-global-text">Історія</h3>
            <p>
                Мало кому з жителів суші відомо про Темний риф — підводну в'язницю для всілякого роду підводного
                поголів'я: змієногих-убивць, зрадників із глибин, маніяків-мерансів та інших морських мешканців, які
                вчинили злочини проти своїх родичів. Коридори її темні і заплутані, стіни вкриті гострими, як
                бритва, коралами. Лабіринт невпинно патрулюють юркі вугри, а на варті непорушно стоять гігантські
                анемони. Виживають тут лише найзлісніші і найжорстокіші. У цьому поганому місці Slark провів більшу
                частину життя, заточений за нікому не відомі гріхи, не відаючи будь-яких радощів і не довіряючи
                будь-кому. Виживати допомагали скритність і безжалісність, а також зберігання планів та задумів при
                собі. Якось дванадцять ув'язнених, прозваних згодом Дюжиною Темного рифу, об'єдналися для втечі,
                якій судилося закінчитися плачевно. Змовники зберігали свої плани в найсуворішій таємниці і
                розправлялися з усіма, хто міг би скласти мозаїку. Але все ж таки хитряк Slark якимось чином зміг
                про все дізнатися і підготувати собі місце у витівці. У день втечі десятеро з Дюжини було вбито при
                спробі втекти, а двох виловили живцем і публічно стратили на потіху іншим каторжникам. Проте ніхто
                не помітив, що втікачів було тринадцять. Скориставшись метушні, Slark прослизнув непоміченим повз
                охорону і відразу ж загубився в глибинах. Своїм новим місцем проживання він вибрав небезпечні
                мангрові зарості біля південного краю Тінистого узмор'я. Таким чином, Slark став єдиним в історії
                ув'язненим, якому вдалося втекти із Темного рифу.
            </p>
            <p></p>
            <h3>Навички</h3>
            <p></p>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/slark/ability1.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12"}>
                    <p><h4>Dark Pact </h4> Dark Pact
                        Після невеликої затримки герой жертвує трохи власної крові, знімаючи з себе більшість
                        негативних ефектів і завдаючи шкоди всім ворогам поблизу. Сам герой отримує 30% завданої
                        цією здатністю шкоди.
                    </p>
                </Col>
            </Row>
            <Row>
                <div>
                    <p>Затримка: 1.5 <br/> Радіус: 325 <br/>
                        Втрата: 75/150/225/300 (Талант :145/220/295/370)</p>
                </div>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/slark/ability2.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Pounce</h4>Герой стрибає вперед, хапаючи першого героя, що попався на шляху, і прив'язує
                        його до місця, не дозволяючи піти далі певної відстані.
                    </p>
                </Col>
            </Row>
            <Row>
                <div>
                    <p>Дальність: 700 <br/> Тривалість прив'язки: 2.5/2.75/3/3.25 (Талант: 3.3/3.55/3.8/4.05
                        ) <br/> Радіус прив'язки:&nbsp;400</p></div>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/slark/ability3.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Essence Shift</h4>Герой краде атаками життєву сутність ворожих героїв, викачуючи всі їхні
                        атрибути і перетворюючи їх на додаткову спритність для себе. Власник цієї здатності назавжди
                        краде одну спритність, якщо вбиває жертву під цим ефектом.
                    </p>
                </Col>
            </Row>
            <Row>
                <div>
                    <p>Дає спритності: 3(Талант:4)<br/>Постійний бонус до
                        спритності за вбивство: 1<br/> Забирає
                        характеристики: 1<br/>Тривалість: 15/30/60/100
                        (Талант:70/85/115/155)</p></div>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/slark/ability4.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Depth Shroud</h4>
                        Створює у вказаній області хмару радіусом 300 на 3 сек. Всі союзники у хмарі приховані, і на
                        них діє ефект здатності Shadow Dance.
                    </p>
                </Col>
            </Row>
            <Row>
                <div>
                    <div>Дальність застосування:800</div>
                    <div>Радіус хмари: 300</div>
                    <div>Тривалість затримки аури: 0.5<br/>Тривалість:3</div>
                    <div>Бонус до швидкості пересування:24%/36%/48%<br/>Максимального
                        здоров'я у вигляді регенерації за секунду: 5/6/7%
                    </div>
                    <div><br/>Для активації здатності потрібно&nbsp;<span
                        className="image-link">Aghanim's Shard.</span>
                    </div>
                </div>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/slark/ability5.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12"}>
                    <p><h4>Shadow Dance</h4> Приховує героя у хмарі тіней, роблячи його невидимим. Ця невидимість не
                        розкривається нічим; атаки, використання предметів та застосування здібностей також не
                        знімають невидимість. Пасивно збільшує швидкість пересування та відновлення здоров'я, коли
                        героя не бачать вороги.
                    </p>
                </Col>
            </Row>
            <Row>
                <div className="features-editor-area__item">
                    <p>Тривалість: 4/4.25/4.5 (Талант: 5/5.25/5.5) <br/> Доп.
                        швидкість пересування:24/36/48%&nbsp;<br/> Здоров'я за
                        секунду: 5/6/7%<br/>Затримка активації пасивного
                        ефекту: 0,5<br/>ривалість бездіяльності від втрати нейтральних
                        кріпів:2<br/>Бонус до швидкості атаки: 0 (Талант:
                        50)</p></div>
            </Row>

        </>
    },
    {
        id: 4,
        tittle: "Phantom Assassin ",
        imgurl: "./img/card/Heroes/pa/pa.jpg",
        cardDescription: "PA - кор-герой, який віддає перевагу легкій лінії.",
        modalDescription: <>
            <p></p>
            <h3>Історія</h3>
            <p>
                Передбачуваними ритуалами обираються діти, які мають бути прийняті в орден Сестер Вуалі — приховане
                співтовариство, яке виділяє вбивство як священну частину природного циклу життя. Сестри Вуалі
                виділяють цілі шляхом медитації, пророчо промовляючи імена. Вони не приймають контрактів, і, схоже,
                ніколи не переслідують жодних політичних чи найманських інтересів. Їхні вбивства не виділяють жодної
                видимої приналежності до спільноти, і можуть здатися не пов'язаними між собою: людина з великою
                владою має такі ж шанси на смерть, як і селянин чи копаток колодязів. Який би послідовності не
                простежувалося у вбивствах, її знають лише вони самі. Жертви шануються ними скоріше як
                жертвопринесення, а смерть від їхніх рук вважається честю. Вирощена без особи, з мораллю ордену на
                її місці, будь-яка фантомна вбивця здатна замінити іншу, їх кількість не відана. Можливо їх багато;
                можливо, їхня одиниця. Ніщо не відомо про те, що лежить під Вуаллю Фантома. Лише ця, іноді, коли
                навколо більше нікого немає, піднімає свою вуаль, щоб сказати заборонений шепіт свого імені:
                Мортред.
            </p>
            <p></p>
            <h3>Навички</h3>
            <p></p>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/pa/ability1.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12"}>
                    <p><h4>Stifling Dagger</h4>Кидає кинджал, який уповільнює швидкість пересування ворога, завдає
                        фізичної шкоди у розмірі 65 + 25/40/55/70% від атаки Phantom Assassin, а також накладає
                        ефекти предметів та здібностей.
                    </p>
                </Col>
            </Row>
            <Row>
                <p>Уповільнення пересування: 50%<br/> Тривалість
                    уповільнення:2,2/2,8/3,4/4<br/> Базовий шкода: 65<br/>
                    Втрата від атаки: 25/40/55/70%<br/> Дальність
                    застосування:550/750/950/ 1150<br/> Число цілей: 1
                    (Талант: 3)</p>
            </Row> /
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/pa/ability2.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Phantom Strike</h4> Герой телепортується до обраної істоти та отримує додаткову швидкість
                        атаки по ньому, якщо це противник.
                    </p>
                </Col>
            </Row>
            <Row>

                <p>Дальність застосування: 1000 (Талант: 1250)<br/> Доп.
                    швидкість атаки:75/100/125/150<br/> Тривалість: 2
                    (Талант: 3)</p>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/pa/ability3.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Blur</h4>Герой зосереджується у собі, що дозволяє йому ухилятися від атак. Застосування
                        можливості розмиє контури господаря, роблячи його невидимим, якщо поруч немає ворожих
                        героїв. Поєднується з іншими джерелами ухилення за законом спадної корисності.
                    </p>
                </Col>
            </Row>
            <Row>

                <p>Ухиляння:20/30/40/50%
                    (Талант:55/65/75/85%) <br/> Радіус невидимості:
                    600 <br/> Затримка перед зникненням: 0 <br/> Затримка перед
                    появою: 0.5<br/> Тривалість: 25</p>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/pa/ability4.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Fan of Knives</h4>
                        Випускає гострі кинджали. Вони завдають ворогам шкоди у розмірі 16% від їх максимального
                        здоров'я і накладають виснаження на 3 секунди.
                    </p>
                </Col>
            </Row>
            <Row>
                <p>Радіус: 550<br/>Втрата: 16%<br/>Тривалість
                    виснаження: 3<br/><br/> Для активації можливості потрібно
                    Aghanim's Shard.</p>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/pa/ability5.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12"}>
                    <p><h4>Coup de Grace</h4>Coup de Grace
                        Phantom Assassin відточує свої бойові здібності, отримуючи шанс завдати нищівного критичного
                        удару по ворогові. Здатність Stifling Dagger отримує такий самий шанс.
                    </p>
                </Col>
            </Row>
            <Row>
                <p>Шанс спрацьовування: 15% (Талант: 22%)<br/> Критична
                    шкода: 200/325/450%&nbsp;</p>
            </Row>

        </>
    },
    {
        id: 5,
        tittle: "Lina",
        imgurl: "./img/card/Heroes/lina/lina.jpg",
        cardDescription: "Герой далекого бою, здатний стати лідером і сапортом.",
        modalDescription: <>
            <p></p>
            <h3>Історія</h3>
            <p>
                У землях, де свого часу жили Lina та її сестра Рілай (Crystal Maiden), досі ходять легенди про їхні
                буйні дитячі бійки. Вони Lina часто мала певну перевагу — її прагнення і вогненна міць
                врівноважувалися терпінням і розумом. А батьки, що втратили будь-яку надію на спокійне життя, міняли
                вдома один за одним: то їхнє житло горить у полум'ї однієї сестри, то розвалюється на шматочки під
                крижаним штормом іншої. Так тривало доти, доки вони не вирішили: дітей настав час розлучити. Lina як
                старшу відправили до терплячої тітоньки в пустелю Мізрула, клімат якої цілком підходив до
                темпераменту дівчинки. Нова жителька швидко справила враження на зазвичай сонних місцевих: багато
                хто залишився без брів, з опаленим волоссям і все в гарі, коли їхнє залицяння беззастережно і
                полум'яно відкидалося. Гординя Lina горить вогнем, її самовпевненість обпалює, і ніщо не зможе
                загасити пожежу, вчинену нею на полі бою.
            </p>
            <p></p>
            <h3>Навички</h3>
            <p></p>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/lina/ability1.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12"}>
                    <p><h4>Dragon Slave </h4>Герой вивільняє подих дракона, що спалює всіх на своєму шляху.
                    </p>
                </Col>
            </Row>
            <Row>

                <p>Дальність застосування: 800<br/> Початковий
                    радіус: 275 <br/> Дальність проходження: 1075<br/> Кінковий
                    радіус : 200 <br/> Втрата: 85/160/235/310</p>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/lina/ability2.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Light Strike Array</h4>
                        Закликає стовп полум'я, яке руйнує і приголомшує ворогів.
                    </p>
                </Col>
            </Row>
            <Row>

                <p>Дальність застосування: 625<br/> Радіус: 250
                    <br/> Затримка: 0,5 <br/> Втрата:80/130/180/230 (Талант: 210/260/310/360) <br/>Тривалість
                    оглушення: 1, 6/1,9/2,2/2,5</p>

            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/lina/ability3.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Fiery Soul </h4>Дає бонус до швидкості атаки та пересування щоразу, коли герой
                        використовує заклинання. Бонуси складаються один з одним. Діє 12 секунд.
                    </p>
                </Col>
            </Row>
            <Row>
                <p>Максимально зарядів: 3 <br/> Доп. швидкість
                    пересування:4/5/6/7% (Талант:6/7/8/9%) <br/>
                    Доп. швидкість атаки:30/50/70/90
                    (Талант:60/90/100/120) <br/> Тривалість
                    бонусу: 12</p>
            </Row>
            <hr/>
            <Row>
                <Col className={"col-md-4 col-sm-12"}>

                    <img src="./img/card/Heroes/lina/ability4.jpg" alt=""/>
                </Col>
                <Col className={"col-md-8 col-sm-12 "}>
                    <p><h4>Laguna Blade</h4>
                        Випускає розряд блискавки в одного ворога, завдаючи нищівної шкоди.
                    </p>
                </Col>
            </Row>
            <Row>
                <p>Дальность применения: 600<br/> Задержка урона: 0.25 <br/>
                    Урон:500/700/900</p>
            </Row>


        </>
    },];

export const ItemList = [
    {
        id: 1,
        tittle: "Blink Dagger",
        imgurl: "./img/card/item/bd.webp",
        cardDescription:
            <div className={"d-flex align-items-center"}>
                <img height={20} src="./img/card/item/gold.png" alt="gold"/>
                <h3 className={"ps-1"}>2250</h3>
            </div>
        ,
        modalDescription:
            <>
                <p>Миттєво переміщує до зазначеної точки на відстані до 1200. <br/>
                    Предмет не можна використовувати, якщо останні 3 сек.<br/> його власник отримував шкоду від
                    ворожих героїв або Рошана.<br/>

                    Дальність застосування: <span className={"text-warning"}> глобальна</span> <br/>
                    Максимальна дистанція телепортації: <span className={"text-warning"}> 1200 </span> <br/>
                    Штрафна дистанція телепортації: <span className={"text-warning"}> 960</span> <br/>
                    Перезаряджання при отриманні шкоди: <span className={"text-warning"}>3</span></p>
            </>

    },
    {
        id: 2,
        tittle: "Shadow Blade",
        imgurl: "./img/card/item/sb.webp",
        cardDescription:
            <div className={"d-flex align-items-center"}>
                <img height={20} src="./img/card/item/gold.png" alt="gold"/>
                <h3 className={"ps-1"}>3000</h3>
            </div>
        ,
        modalDescription:
            <>
                <p> Активована: <span className={"text-warning"}>Shadow Walk.</span> <br/>

                    Робить героя невидимим на 14 сік. або до моменту, коли він здійснить атаку або застосує
                    здатність.<br/> Також збільшує швидкість пересування на 20% і дозволяє проходити крізь
                    істоти.<br/>
                    Атака, що перериває невидимість, додатково завдасть 175 фізичних збитків.<br/>

                    Час до невидимості: <span className={"text-warning"}>0.3</span> <br/>
                    Втрата: <span className={"text-warning"}>175 </span> <br/>
                    Бонус до швидкості пересування: <span className={"text-warning"}>20%</span><br/>
                    Тривалість: <span className={"text-warning"}>14</span><br/>

                    +<span className={"text-warning"}>20 </span>до шкоди<br/>
                    +<span className={"text-warning"}>35 </span>до швидкості атаки<br/></p>
            </>
    },
    {
        id: 3,
        tittle: "Aghanim's Scepter ",
        imgurl: "./img/card/item/aghanim.png",
        cardDescription:
            <div className={"d-flex align-items-center"}>
                <img height={20} src="./img/card/item/gold.png" alt="gold"/>
                <h3 className={"ps-1"}>4200</h3>
            </div>
        ,
        modalDescription:
            <>
                <p> Пасивна: <span className={"text-warning"}>Ultimate Upgrade.</span> <br/>
                    Покращує ульт і деякі здібності всіх героїв.<br/>
                    +<span className={"text-warning"}>10</span> до всіх атрибутів<br/>
                    +<span className={"text-warning"}>175</span> до здоров'я <br/>
                    +<span className={"text-warning"}>175</span> до мани</p>
            </>
    },
    {
        id: 4,
        tittle: "Hand of Midas ",
        imgurl: "./img/card/item/midas.webp",
        cardDescription:
            <div className={"d-flex align-items-center"}>
                <img height={20} src="./img/card/item/gold.png" alt="gold"/>
                <h3 className={"ps-1"}>2200</h3>
            </div>
        ,
        modalDescription:
            <>
                <p>Активована: <span className={"text-warning"}>Transmute.</span> <br/>

                    Вбиває обрану ціль (але не героя), даючи за неї 160 золота і в 2.1 рази більше досвіду.<br/>
                    Не діє на стародавніх крипів.<br/>
                    Дальність застосування: <span className={"text-warning"}>600</span><br/>
                    Додаткове золото: <span className={"text-warning"}>160</span><br/>
                    Додатковий досвід: <span className={"text-warning"}>210%</span><br/>

                    +<span className={"text-warning"}>40</span> до швидкості атаки</p>
            </>
    },
    {
        id: 5,
        tittle: "Blade Mail ",
        imgurl: "./img/card/item/bm.webp",
        cardDescription:
            <div className={"d-flex align-items-center"}>
                <img height={20} src="./img/card/item/gold.png" alt="gold"/>
                <h3 className={"ps-1"}>2125</h3>
            </div>
        ,
        modalDescription:
            <>
                <p>Активована: <span className={"text-warning"}>Damage Return.</span> <br/>
                    Збільшує повернення втрат від усіх джерел на 80%. Триває 4.5 секунди. <br/>

                    Повертає шкоди: <span className={"text-warning"}>80%</span> <br/>
                    Тривалість: <span className={"text-warning"}>4.5</span> <br/>

                    Пасивна: <span className={"text-warning"}>Damage Return.</span> <br/>

                    Повертає <span className={"text-warning"}>20</span> + <span
                        className={"text-warning"}>20%</span> втрати від кожної атаки атакуючим вас істотам. <br/>

                    Базова шкода: <span className={"text-warning"}>20</span> <br/>
                    Повернутий від отриманого: <span className={"text-warning"}>20%</span> <br/>
                    +<span className={"text-warning"}>28</span> до шкоди <br/>
                    +<span className={"text-warning"}>6</span> до броні</p>
            </>
    },
    {
        id: 6,
        tittle: "Divine Rapier",
        imgurl: "./img/card/item/rapira.png",
        cardDescription:
            <div className={"d-flex align-items-center"}>
                <img height={20} src="./img/card/item/gold.png" alt="gold"/>
                <h3 className={"ps-1"}>6000</h3>
            </div>
        ,
        modalDescription:
            <>
                <p>Пасивна: <span className={"text-warning"}>Everlasting.</span>
                    Предмет випадає при смерті героя і може бути знищений. <br/> Якщо союзник підібрав цей артефакт, він
                    втрачає свої властивості, поки його не повернуть колишньому власнику. <br/> Якщо його підбере ворог,
                    це правило скасовується, дозволяючи будь-кому отримати бонуси від підібраної Divine Rapier.
                    Кур'єр не може підібрати цей артефакт, якщо він випав під час смерті.<br/>
                    <p></p>
                    +<span className={"text-warning"}>350</span> до шкоди </p>
            </>
    },
];

export const DescList = [
    {
        id: 1,
        desc:
            <>
                <Col className={"col-sm-12 col-xl-6 d-flex justify-content-center align-items-center pt-sm-2"}>
                    <p> Dota 2 — командна онлайн гра у жанрі MOBA. Ігровий процес будується навколо боротьби двох
                        команд
                        по
                        п'ять героїв, кожен з яких контролюється одним із гравців. Кожна команда має свій табір: у
                        правому
                        верхньому куті мапи розташовується Темна сторона (The Dire), у лівому нижньому — Світла
                        сторона
                        (The
                        Radiant).

                        Гра проходить у вигляді окремих партій, жодна з попередніх партій не впливає на майбутні.
                        Для
                        участі
                        в партії гравець має розпочати пошук доступної гри. Коли на певному сервері набереться 10
                        гравців
                        приблизно однакового рівня майстерності, партія розпочинається. </p>
                </Col>
                <Col className={"col-sm-12 col-xl-6"}>
                    <img className={"shadow-img w-100"} src="./img/about/f-img.webp" alt=""/>
                </Col>
            </>

    },
    {
        id: 2,
        desc:
            <>
                <Col className={"col-sm-12 col-xl-6"}>
                    <img className={"shadow-img w-100"} src="./img/about/s-img.png" alt=""/>
                </Col>
                <Col className={"col-sm-12 col-xl-6 d-flex justify-content-center align-items-center pt-sm-2"}>
                    <ul>
                        <h3>Режими Гри</h3>
                        <li>All Pick: Гравцю доступні всі герої, яких ще не обрали інші гравці.</li>
                        <li>Turbo: Пришвидшена версія режиму All Pick</li>
                        <li>Single Draft: Гравцю дається на вибір три випадкових героя.</li>
                        <li>Captains Mode: У кожній команді призначається капітан, який обирає 5 героїв для своєї
                            команди
                            і, таким чином, забороняє 5 героїв для обрання капітану суперника.
                        </li>
                    </ul>
                </Col>
            </>
    },
    {
        id: 3,
        desc:
            <>
                <Col className={"col-sm-12 col-xl-6 d-flex justify-content-center align-items-center pt-sm-2"}>
                    <p>
                        <h3>The International</h3>
                        2013 року знову в Сієтлі було проведено черговий турнір The International 3. Переможцем
                        турніру
                        та власником 1 437 190 доларів стала шведська команда Alliance. <br/>

                        2014 року проведено турнір The International 2014. Він теж відбувся в Сієтлі. Призовий фонд
                        турніру сягнув 10 мільйонів доларів. Переможцем турніру стала китайська команда
                        Newbee. <br/>

                        The International 2015 пройшов із 3 по 8 серпня 2015 року в Сієтлі. Україну знову
                        представляла
                        Natus Vincere. <br/>

                        У 2016 турнір The International 2016 тривав із 8 по 13 серпня також в Сієтлі. <br/>

                        У 2017 на турнірі The International 2017 перемогла команда Team Liquid, вигравши більше $10
                        000
                        000. <br/>

                        У 2018 на турнірі The International 2018 перемогла команда OG, вигравши $11 234 758. <br/>

                        У 2019 на турнірі The International 2019 перемогла команда OG, вигравши $15 620 181. <br/>

                        2020 року турнір не проводився через пандемію COVID-19. <br/>

                        У 2021 на International 2021 здобула перемогу команда Team Spirit, вигравши $18 000
                        000 <br/>
                    </p>
                </Col>
                <Col className={"col-sm-12 col-xl-6"}>
                    <img className={"shadow-img w-100"} src="./img/about/t-img.webp" alt=""/>
                </Col>
            </>
    },
    {
        id: 4,
        desc:
            <>
                <Col className={"col-sm-12 col-xl-6"}>
                    <img className={"shadow-img w-100"} src="./img/about/fo-img.jpg" alt=""/>
                </Col>
                <Col className={"col-sm-12 col-xl-6 d-flex justify-content-center align-items-center pt-sm-2"}>
                    <p>
                        <h3>Сезон 2017—2018</h3>
                        Починаючи з осені 2017-го року, був запущений перший професійний сезон Dota Pro Circuit, що
                        включав 22 турніри, де крім призового грошового фонду розігрувалися рейтингові
                        очки.<br/> Ігровий рік
                        включав 9 турнірів рівня Major і 13 рівня Minor.<br/> Безпосередньо на TI запрошували 8
                        команд,
                        які
                        набрали найбільше очок за підсумками всіх Dota 2 турнірів, де розігрувалися рейтингові
                        DPC-очки.

                    </p>
                </Col>

            </>
    },
    {
        id: 5,
        desc:
            <>
                <Col className={"col-sm-12 col-xl-6 d-flex justify-content-center align-items-center pt-sm-2"}>
                    <p>
                        <h3>Сезон 2018—2019</h3>
                        У другому сезоні формату Dota Pro Circuit було усунуто деякі недоліки
                        попереднього.<br/> Кількість
                        команд, які безпосередньо потрапили на The International 2019 було збільшено до 12<br/> а
                        кожен
                        з
                        6-ти регіонів отримував тільки по одному слоту з кваліфікацій на The International 2019, що
                        виглядало більш чесно. <br/>

                    </p>
                </Col>
                <Col className={"col-sm-12 col-xl-6"}>
                    <img className={"shadow-img w-100"} src="./img/about/fi-img.webp" alt=""/>
                </Col>
            </>
    },
    {
        id: 6,
        desc:
            <>
                <Col className={"col-sm-12 col-xl-6"}>
                    <img className={"shadow-img w-100"} src="./img/about/si-img.webp" alt=""/>
                </Col>
                <Col className={"col-sm-12 col-xl-6 d-flex justify-content-center align-items-center pt-sm-2"}>
                    <p>
                        <h3>Сезон 2019—2020</h3>
                        У третьому сезоні було вирішено об'єднати відбіркові кваліфікації для Minor і Major турнірів
                        —
                        щонайменше по дві команди з кожного регіону проходили на головний турнір напряму, а
                        колективи,
                        що посіли треті місця, відправлялися на втішні змагання Minor.

                    </p>
                </Col>

            </>
    },
];