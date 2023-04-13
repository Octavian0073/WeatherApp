const input = document.querySelector('#cityInput');
const list = document.querySelector('.list-group');
const weatherContainer = document.querySelector('#weatherContainer');

const clearSky =  `<svg width="20px" height="20px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/>
<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path d="M23.9922 38.4651C24.6394 38.4651 25.1717 38.957 25.2358 39.5873L25.2422 39.7151V42.7527C25.2422 43.443 24.6826 44.0027 23.9922 44.0027C23.345 44.0027 22.8127 43.5108 22.7487 42.8805L22.7422 42.7527V39.7151C22.7422 39.0248 23.3019 38.4651 23.9922 38.4651ZM35.8947 34.0978L35.9962 34.1889L38.1441 36.3368C38.6322 36.8249 38.6322 37.6164 38.1441 38.1046C37.6884 38.5602 36.9686 38.5905 36.4778 38.1957L36.3763 38.1046L34.2284 35.9567C33.7403 35.4685 33.7403 34.6771 34.2284 34.1889C34.684 33.7333 35.4039 33.7029 35.8947 34.0978ZM13.755 34.1889C14.2106 34.6445 14.241 35.3644 13.8461 35.8552L13.755 35.9567L11.6071 38.1046C11.119 38.5927 10.3275 38.5927 9.83937 38.1046C9.38376 37.6489 9.35339 36.9291 9.74825 36.4383L9.83937 36.3368L11.9872 34.1889C12.4754 33.7008 13.2668 33.7008 13.755 34.1889ZM23.9999 13.0805C30.0306 13.0805 34.9194 17.9693 34.9194 24C34.9194 30.0306 30.0306 34.9194 23.9999 34.9194C17.9693 34.9194 13.0805 30.0306 13.0805 24C13.0805 17.9693 17.9693 13.0805 23.9999 13.0805ZM23.9999 15.5805C19.35 15.5805 15.5805 19.3501 15.5805 24C15.5805 28.6499 19.35 32.4194 23.9999 32.4194C28.6499 32.4194 32.4194 28.6499 32.4194 24C32.4194 19.3501 28.6499 15.5805 23.9999 15.5805ZM42.7308 22.787C43.4212 22.787 43.9808 23.3467 43.9808 
24.037C43.9808 24.6842 43.489 25.2166 42.8586 25.2806L42.7308 25.287H39.6933C39.0029 25.287 38.4433 24.7274 38.4433 24.037C38.4433 23.3898 38.9352 22.8575 39.5655 22.7935L39.6933 22.787H42.7308ZM8.30657 22.7287C8.99692 22.7287 9.55657 23.2884 9.55657 23.9787C9.55657 24.6259 9.06469 25.1582 8.43437 25.2223L8.30657 25.2287H5.26904C4.57869 25.2287 4.01904 24.6691 4.01904 23.9787C4.01904 23.3315 4.51092 22.7992 5.14124 22.7352L5.26904 22.7287H8.30657ZM11.5056 9.8043L11.6071 9.89542L13.755 12.0433C14.2432 12.5314 14.2432 13.3229 13.755 13.811C13.2994 14.2667 12.5796 14.297 12.0887 13.9022L11.9872 13.811L9.83937 11.6632C9.35122 11.175 9.35122 10.3836 9.83937 9.89542C10.295 9.43981 11.0148 9.40943 11.5056 9.8043ZM38.1441 9.89542C38.5997 10.351 38.63 11.0709 38.2352 11.5617L38.1441 11.6632L35.9962 13.811C35.508 14.2992 34.7166 14.2992 34.2284 13.811C33.7728 13.3554 33.7425 12.6356 34.1373 12.1448L34.2284 12.0433L36.3763 9.89542C36.8644 9.40727 37.6559 9.40727 38.1441 9.89542ZM24.0004 3.99731C24.6476 3.99731 25.18 4.48919 25.244 5.11951L25.2504 5.24731V8.28484C25.2504 8.97519 24.6908 9.53484 24.0004 9.53484C23.3532 9.53484 22.8209 9.04296 22.7569 8.41264L22.7504 8.28484V5.24731C22.7504 4.55696 23.3101 3.99731 24.0004 3.99731Z" fill="#ffffff"/> </g></svg>`;
const partlyCloudy = `<svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><title>ionicons-v5-n</title><path d="M90.61,306.85A16.07,16.07,0,0,0,104,293.6C116.09,220.17,169.63,176,232,176c57.93,0,96.62,37.75,112.2,77.74a15.84,15.84,0,0,0,12.2,9.87c50,8.15,91.6,41.54,91.6,99.59C448,422.6,399.4,464,340,464H106c-49.5,0-90-24.7-90-79.2C16,336.33,54.67,312.58,90.61,306.85Z" style="fill:none;stroke:#ffffff;stroke-linejoin:round;stroke-width:32px"/><path d="M384.8,271.4a80,80,0,1,0-123.55-92" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="464" y1="208" x2="496" y2="208" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="336" y1="48" x2="336" y2="80" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="222.86" y1="94.86" x2="245.49" y2="117.49" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="449.14" y1="94.86" x2="426.51" y2="117.49" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></g></svg>`;
const fog = `<svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title>fog</title><path d="M24.8008,11.1382a8.9938,8.9938,0,0,0-17.6006,0A6.533,6.533,0,0,0,2,17.5H2V19a1,1,0,0,0,1,1H15a1,1,0,0,0,0-2H4v-.4966H4a4.5176,4.5176,0,0,1,4.144-4.4819l.8155-.064.0991-.812a6.9936,6.9936,0,0,1,13.8838,0l.0986.812.8154.064A4.4962,4.4962,0,0,1,23.5,22H7a1,1,0,0,0,0,2H23.5a6.4963,6.4963,0,0,0,1.3008-12.8618Z"/><rect x="2" y="26" width="18" height="2" rx="1"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>`;
const drizzle = `<svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M 12.2617 36.5078 L 41.3476 36.5078 C 49.0352 36.5078 54.7539 30.6719 54.7539 23.4297 C 54.7539 15.9766 48.6603 10.5156 40.7148 10.5156 C 37.7851 4.7266 32.3476 1.0000 25.5742 1.0000 C 16.7617 1.0000 9.4960 7.8906 8.7226 16.6094 C 4.4804 17.8281 1.2461 21.5312 1.2461 26.4766 C 1.2461 32.0078 5.2773 36.5078 12.2617 36.5078 Z M 12.2148 32.7344 C 7.4101 32.7344 4.9960 30.0625 4.9960 26.5937 C 4.9960 23.7578 6.6367 21.2266 10.6211 20.1719 C 11.9101 19.8437 12.3789 19.2344 12.4960 17.8984 C 13.0351 10.2578 18.7773 4.7500 25.5742 4.7500 C 30.8476 4.7500 34.9960 7.6328 37.5273 12.8359 C 38.0664 13.9609 38.7695 14.3594 40.1523 14.3594 C 47.0898 14.3594 51.0037 18.5547 51.0037 23.5469 C 51.0037 28.6563 46.9256 32.7344 41.5820 32.7344 Z M 31.2929 47.4297 L 34.3398 42.1562 C 34.7617 41.4297 34.5273 40.6094 33.8242 40.2109 C 33.1211 39.7891 32.3242 40.0234 31.9023 40.75 L 28.8086 46.0703 C 28.4336 46.75 28.6211 47.5703 29.3476 47.9922 C 30.0507 48.3672 30.8945 48.1328 31.2929 47.4297 Z M 12.6367 47.4531 L 15.6836 42.1797 C 16.1054 41.4531 15.8945 40.6328 15.1914 40.2344 C 14.4648 39.8125 13.6679 40.0469 13.2460 40.7734 L 10.1758 46.0937 C 9.7773 46.7734 9.9882 47.5937 10.6914 47.9922 C 11.3945 48.3906 12.2382 48.1563 12.6367 47.4531 Z M 38.6054 54.0390 L 41.6523 48.7422 C 42.0976 48.0390 41.8633 47.2188 41.1601 46.7969 C 40.4570 46.3984 39.6601 46.6328 39.2148 47.3359 L 36.1445 52.6797 C 35.7460 53.3359 35.9570 54.1563 36.6836 54.5781 C 37.3633 54.9766 38.2070 54.7422 38.6054 54.0390 Z M 19.9726 54.0625 L 23.0195 48.7656 C 23.4414 48.0625 23.2070 47.2422 22.5273 46.8203 C 21.8007 46.4219 21.0038 46.6562 20.5820 47.3594 L 17.5117 52.7031 C 17.1133 53.3594 17.3007 54.1797 18.0273 54.6016 C 18.7304 55 19.5742 54.7656 19.9726 54.0625 Z"/></svg>`;
const rain = `<svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title>rain--heavy</title><path d="M17,30a1,1,0,0,1-.8944-1.4474l2-4.0005a1,1,0,1,1,1.7888.8947l-2,4A.9981.9981,0,0,1,17,30Z"/><path d="M8,30a1,1,0,0,1-.8944-1.4474l2-4.0005a1,1,0,1,1,1.7888.8947l-2,4A.9981.9981,0,0,1,8,30Z"/><path d="M30,15.5a6.5323,6.5323,0,0,0-5.1992-6.3638,8.9943,8.9943,0,0,0-17.6006,0A6.4905,6.4905,0,0,0,5.7026,21.3584L4.106,24.5527a1,1,0,1,0,1.7885.8946L7.6174,22l6.7644,0L13.106,24.5527a1,1,0,1,0,1.7885.8946L16.6177,22h6.7641L22.106,24.5527a1,1,0,1,0,1.7885.8946l1.9444-3.89A6.5058,6.5058,0,0,0,30,15.5ZM23.5,20H8.5a4.4975,4.4975,0,0,1-.356-8.981l.8155-.0639.0991-.812a6.9938,6.9938,0,0,1,13.8838,0l.0986.812.8154.0639A4.4975,4.4975,0,0,1,23.5,20Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>`;
const snow = `<svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path d="M826.4 491.5H757l39.7-39.7c8.2-8.2 8.2-21.6 0-29.8s-21.5-8.2-29.8 0l-69.5 69.5h-136l96.2-96.2h98.2c11.6 0 21.1-9.4 21.1-21s-9.4-21.1-21.1-21.1h-56.1l49.1-49.1c8.2-8.2 8.2-21.6 0-29.8s-21.5-8.2-29.8 0l-49 49.1v-56.2c0-11.6-9.4-21.1-21.1-21.1-11.6 0-21.1 9.4-21.1 21.1v98.3l-96.2 96.2v-136l69.5-69.5c8.2-8.2 8.2-21.6 0-29.8s-21.5-8.2-29.8 0l-39.7 39.7v-69.4c0-11.6-9.4-21.1-21.1-21.1s-21.1 9.4-21.1 21.1v69.4l-39.7-39.7c-8.2-8.2-21.5-8.2-29.8 0-8.2 8.2-8.2 21.6 0 29.8l69.5 69.5v136.1l-96.2-96.2v-98.2c0-11.6-9.4-21.1-21.1-21.1s-21.1 9.4-21.1 21v56.2l-49.1-49c-8.2-8.2-21.5-8.2-29.8 0-8.2 8.2-8.2 21.6 0 29.8l49.1 49.1H265c-11.6 0-21.1 9.4-21.1 21.1 0 11.6 9.4 21 21.1 21h98.3l96.2 96.2H323.7L254.3 422c-8.2-8.2-21.5-8.2-29.8 0-8.2 8.2-8.2 21.6 0 29.8l39.7 39.7h-69.4c-11.6 0-21.1 9.4-21.1 21.1s9.4 21.1 21.1 21.1h69.4l-39.7 39.7c-8.2 8.2-8.2 21.6 0 29.8 4.1 4.1 9.5 6.2 14.9 6.2s10.8-2.1 14.9-6.2l69.5-69.5h136.1l-96.2 96.2h-98.3c-11.6 0-21.1 9.4-21.1 21.1s9.4 21.1 21.1 21.1h56.1l-49 49c-8.2 8.2-8.2 21.6 0 29.8 4.1 4.1 9.5 6.2 14.9 6.2s10.8-2.1 14.9-6.2l49-49v56.2c0 11.6 9.4 21.1 21.1 21.1s21.1-9.4 21.1-21.1v-98.3l96.2-96.2v136.1l-69.5 69.5c-8.2 8.2-8.2 21.6 0 29.8s21.5 8.2 29.8 0l39.7-39.7v69.4c0 11.6 9.4 21.1 21.1 21.1s21.1-9.4 21.1-21.1v-69.4l39.7 39.7c4.1 4.1 9.5 6.2 14.9 6.2s10.8-2.1 14.9-6.2c8.2-8.2 8.2-21.6 0-29.8l-69.5-69.5v-136l96.2 96.2v98.2c0 11.6 9.4 21.1 21.1 21.1 11.6 0 21.1-9.4 21.1-21v-56.1l49 49c4.1 4.1 9.5 6.2 14.9 6.2s10.8-2.1 14.9-6.2c8.2-8.2 8.2-21.6 0-29.8L700 672.2h56.2c11.6 0 21.1-9.4 21.1-21.1s-9.4-21.1-21.1-21.1h-98.3l-96.2-96.2h136.1l69.4 69.5c4.1 4.1 9.5 6.2 14.9 6.2s10.8-2.1 14.9-6.2c8.2-8.2 8.2-21.6 0-29.8l-40-39.9h69.4c11.6 0 21.1-9.4 21.1-21.1s-9.5-21-21.1-21z" fill="#ffffff"/></g></svg>`;
const rainShowers = `<svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title>rain--heavy</title><path d="M17,30a1,1,0,0,1-.8944-1.4474l2-4.0005a1,1,0,1,1,1.7888.8947l-2,4A.9981.9981,0,0,1,17,30Z"/><path d="M8,30a1,1,0,0,1-.8944-1.4474l2-4.0005a1,1,0,1,1,1.7888.8947l-2,4A.9981.9981,0,0,1,8,30Z"/><path d="M30,15.5a6.5323,6.5323,0,0,0-5.1992-6.3638,8.9943,8.9943,0,0,0-17.6006,0A6.4905,6.4905,0,0,0,5.7026,21.3584L4.106,24.5527a1,1,0,1,0,1.7885.8946L7.6174,22l6.7644,0L13.106,24.5527a1,1,0,1,0,1.7885.8946L16.6177,22h6.7641L22.106,24.5527a1,1,0,1,0,1.7885.8946l1.9444-3.89A6.5058,6.5058,0,0,0,30,15.5ZM23.5,20H8.5a4.4975,4.4975,0,0,1-.356-8.981l.8155-.0639.0991-.812a6.9938,6.9938,0,0,1,13.8838,0l.0986.812.8154.0639A4.4975,4.4975,0,0,1,23.5,20Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>`;
const snowShowers = `<svg width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path d="M826.4 491.5H757l39.7-39.7c8.2-8.2 8.2-21.6 0-29.8s-21.5-8.2-29.8 0l-69.5 69.5h-136l96.2-96.2h98.2c11.6 0 21.1-9.4 21.1-21s-9.4-21.1-21.1-21.1h-56.1l49.1-49.1c8.2-8.2 8.2-21.6 0-29.8s-21.5-8.2-29.8 0l-49 49.1v-56.2c0-11.6-9.4-21.1-21.1-21.1-11.6 0-21.1 9.4-21.1 21.1v98.3l-96.2 96.2v-136l69.5-69.5c8.2-8.2 8.2-21.6 0-29.8s-21.5-8.2-29.8 0l-39.7 39.7v-69.4c0-11.6-9.4-21.1-21.1-21.1s-21.1 9.4-21.1 21.1v69.4l-39.7-39.7c-8.2-8.2-21.5-8.2-29.8 0-8.2 8.2-8.2 21.6 0 29.8l69.5 69.5v136.1l-96.2-96.2v-98.2c0-11.6-9.4-21.1-21.1-21.1s-21.1 9.4-21.1 21v56.2l-49.1-49c-8.2-8.2-21.5-8.2-29.8 0-8.2 8.2-8.2 21.6 0 29.8l49.1 49.1H265c-11.6 0-21.1 9.4-21.1 21.1 0 11.6 9.4 21 21.1 21h98.3l96.2 96.2H323.7L254.3 422c-8.2-8.2-21.5-8.2-29.8 0-8.2 8.2-8.2 21.6 0 29.8l39.7 39.7h-69.4c-11.6 0-21.1 9.4-21.1 21.1s9.4 21.1 21.1 21.1h69.4l-39.7 39.7c-8.2 8.2-8.2 21.6 0 29.8 4.1 4.1 9.5 6.2 14.9 6.2s10.8-2.1 14.9-6.2l69.5-69.5h136.1l-96.2 96.2h-98.3c-11.6 0-21.1 9.4-21.1 21.1s9.4 21.1 21.1 21.1h56.1l-49 49c-8.2 8.2-8.2 21.6 0 29.8 4.1 4.1 9.5 6.2 14.9 6.2s10.8-2.1 14.9-6.2l49-49v56.2c0 11.6 9.4 21.1 21.1 21.1s21.1-9.4 21.1-21.1v-98.3l96.2-96.2v136.1l-69.5 69.5c-8.2 8.2-8.2 21.6 0 29.8s21.5 8.2 29.8 0l39.7-39.7v69.4c0 11.6 9.4 21.1 21.1 21.1s21.1-9.4 21.1-21.1v-69.4l39.7 39.7c4.1 4.1 9.5 6.2 14.9 6.2s10.8-2.1 14.9-6.2c8.2-8.2 8.2-21.6 0-29.8l-69.5-69.5v-136l96.2 96.2v98.2c0 11.6 9.4 21.1 21.1 21.1 11.6 0 21.1-9.4 21.1-21v-56.1l49 49c4.1 4.1 9.5 6.2 14.9 6.2s10.8-2.1 14.9-6.2c8.2-8.2 8.2-21.6 0-29.8L700 672.2h56.2c11.6 0 21.1-9.4 21.1-21.1s-9.4-21.1-21.1-21.1h-98.3l-96.2-96.2h136.1l69.4 69.5c4.1 4.1 9.5 6.2 14.9 6.2s10.8-2.1 14.9-6.2c8.2-8.2 8.2-21.6 0-29.8l-40-39.9h69.4c11.6 0 21.1-9.4 21.1-21.1s-9.5-21-21.1-21z" fill="#ffffff"/></g></svg>`;
const thunderstorm = `<svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><title>ionicons-v5-k</title><line x1="120" y1="352" x2="96" y2="400" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="136" y1="432" x2="120" y2="464" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="400" y1="352" x2="376" y2="400" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="416" y1="432" x2="400" y2="464" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="208 304 192 400 240 400 240 480 320 368 272 368 288 304" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M404.33,152.89H392.2C384.71,84.85,326.14,32,256,32a136.39,136.39,0,0,0-128.63,90.67H122.8c-49.94,0-90.8,40.8-90.8,90.66h0C32,263.2,72.86,304,122.8,304H404.33C446,304,480,270,480,228.44h0C480,186.89,446,152.89,404.33,152.89Z" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></g></svg>`;

//1. Takes the input's value and uses it to set the url for the first fetch
function findPlaces() {
    //2. Check if there is an input, and if the value property exists before accessing it, to prevent errors
    if(input?.value) {
    //3. If there's not a value, no search list will be displayed
        list.innerHTML = '';
    } 
    //4. Fetch the cities to be displayed in the search list
    const cityName = input.value;
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => searchCities(data))
        .catch(function(error) {console.log('request failed', error)})
}

//5. Start listening to findPlaces callback
input.addEventListener('keyup', findPlaces);

//6. Creates and displays in the existing ul, a li HTMLelement for each place that's been fetched
function searchCities(data) {
    const cities = [];
    cities.push(...data.results);
    const html = cities.map((place, i) => {
        return `
        <li class="list-group-item listItem" place="${place.name}" country="${place.country}" item = "${i}" lat="${place.latitude.toFixed(2)}"  lon="${place.longitude.toFixed(2)}" onclick="chooseLocation(event)"}>
            <a>
                ${place.name}
                <small>${place.country} (${place.latitude.toFixed(2)}°E ${place.longitude.toFixed(2)}°N ${place.elevation}m asl)</small>
            </a>
        </li>`;
    }).join('');
    list.innerHTML = html;
}
//7. Function called onclick for each list element, to fetch further information about the weather, using the location's coordinates
function chooseLocation(event) {
    list.innerHTML = '';
    input.value = '';
    const listItem = event.currentTarget;
    const lat = listItem.getAttribute('lat');
    const lon = listItem.getAttribute('lon');

    const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`;
    fetch(weatherURL)
        .then((response) => response.json())
        .then((data) =>  {displayFullWeather(data, listItem); console.log(data);})
        .catch(function(error) {console.log('request failed', error)});
}
//8. Displays information about the weather from the selected location, returning a string which contains specific html
function displayFullWeather(data, listItem) {
//9. Calls two big functions that return specific HTMLelements which display information about the weather
    const fullWeather = `
        ${displayMainWeather(data, listItem)}
        ${detailedWeather(data)}
    `; 
    weatherContainer.innerHTML = fullWeather;
}

//10. Displays main info about the weather, time, and place from the specific location
function displayMainWeather(data, listItem) {
    const title = listItem.getAttribute('place');
    const country = listItem.getAttribute('country');
    const currentTemperature = data.current_weather.temperature;
    const celsius = data.hourly_units.temperature_2m;
    const currentTime = data.current_weather.time;

    const mainWeather = `
        <div id="mainWeather">                  
            <h1 class= 'display-6 mt noMargin'>${title}</h1>
            <span >${country}</span>
            <hr style = "margin: 0.4rem;">
            <h2 class= 'display-7 mt noMargin'>Today</h2>
            <span style="display:block;font-size: small;">${formatDate(currentTime)}</span>
            <span class= 'display-3 mt temp'>${Math.round(currentTemperature)}${celsius}</span>
            <span style="font-size: smaller; opacity: 0.7;">Feels like <span>${Math.round(apparentTemp(data))}${celsius}</span></span>

            <div id="carouselContainer">
                <div class="owl-carousel owl-theme carousel">
                    ${displayCarousel(data, currentTime)}
                </div>
            </div>
        </div>
    `;
    return mainWeather;
}
//11. Carousel returns each of the next 24hours temperature forecast
function displayCarousel(data, currentTime) {
    const celsius = data.hourly_units.temperature_2m;
    const hourlyTemp = data.hourly.temperature_2m;
    const timeArray = data.hourly.time;
//12. Get the array containing the next 24hours starting from now, and the one containing the related temperatures
    const indexOfNow = timeArray.findIndex(item => item === currentTime);

    const timeFromNow = timeArray.slice(indexOfNow, indexOfNow + 24);
    const tempFromNow = hourlyTemp.slice(indexOfNow, indexOfNow + 24);

    const hoursFromNow = timeFromNow.map((time) => {
        const date = new Date(time);
        const hour = date.getHours().toString().padStart(2, '0');
        return `${hour}`;
    })
//13. For each hour, create a div containing information about the hour, weather forecast svg and temperature
    let carousel = '';
    for(let i =0; i<hoursFromNow.length; i++) {
        const time = hoursFromNow[i];
        const temp = tempFromNow[i];
        carousel += `
            <div class="hourlyCard">
                <span class="hour">${time===hoursFromNow[0]?'Now':time}</span>
                ${weatherSVG(data, indexOfNow, i)}
                <span class="hourlyTemp">${Math.round(temp)}${celsius}</span>
            </div>
        `;
    }
    return carousel;
}
//14. Check which svg to be displayed, based on the hourly weathercode(code that describes the weather)
function weatherSVG(data, indexOfNow, i) {
    const hourlyWeatherCode = data.hourly.weathercode;
    const hoursCodes = hourlyWeatherCode.slice(indexOfNow, indexOfNow + 24);

    if(hoursCodes&&hoursCodes.length) {
        if(hoursCodes[i] === 0) {
            return `${clearSky}`;
        }
        if(hoursCodes[i] === 1||hoursCodes[i] === 2||hoursCodes[i] === 3) {
            return `${partlyCloudy}`;
        }
        if(hoursCodes[i] === 45||hoursCodes[i] === 48) {
            return `${fog}`;
        }
        if(hoursCodes[i] === 51||hoursCodes[i] === 53||hoursCodes[i] === 55||hoursCodes[i] === 56||hoursCodes[i] === 57) {
            return `${drizzle}`;
        }
        if(hoursCodes[i] === 61 || hoursCodes[i] === 63 || hoursCodes[i] === 65 || hoursCodes[i] === 66 || hoursCodes[i] === 67) {
            return `${rain}`;
        }
        if(hoursCodes[i] === 71||hoursCodes[i] === 73||hoursCodes[i] === 75||hoursCodes[i] === 77) {
            return `${snow}`;
        }
        if(hoursCodes[i] === 80||hoursCodes[i] === 81||hoursCodes[i] === 82) {
            return `${rainShowers}`;
        }
        if(hoursCodes[i] === 85||hoursCodes[i] === 86) {
            return `${snowShowers}`;
        }
        if(hoursCodes[i] === 95 || hoursCodes[i] === 96 || hoursCodes[i] === 99) {
            return `${thunderstorm}`;
        }
        else {
            return `<span>:(</span>`;
        }
    }
}
//15. Returns secondary information about the weather(sunset, sunrise, windspeed, high-temp, low-temp, etc.)
function detailedWeather(data) {
    const celsius = data.hourly_units.temperature_2m;
    const sunrise = data.daily.sunrise[0];
    const sunset = data.daily.sunset[0];
    const lowTemp = data.daily.temperature_2m_min[0];
    const highTemp = data.daily.temperature_2m_max[0];
    const windSpeed = data.current_weather.windspeed;
    const windSpeedUnit = data.hourly_units.windspeed_10m;
    

    const detailedWeather = `
        <div id="detailedWeather">
            <div id = "today">
                <div id="todayDetails">            
                    <div id="sunriseSunset"> 
                        <p class="sunrise noMargin">Sunrise</p>
                        <div>
                            <svg width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"/></g></svg>
                            <span>${getHour(sunrise)}</span>
                        </div>
                        <hr style = "margin: 0.3rem;">
                        <p class="sunset noMargin">Sunset</p>
                        <div>
                            <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"/></g></svg>
                            <span>${getHour(sunset)}</span>
                        </div>
                    </div>
                    <div id="lowHigh">
                        <p class="low noMargin">Low Temp:</p>
                        <span>${Math.round(lowTemp)}${celsius}</span>
                        <hr class="noMargin">
                        <p class="high noMargin">High Temp:</p>
                        <span>${Math.round(highTemp)}${celsius}</span>
                    </div>
                    <div id="windSpeed">
                        <p class="noMargin">Wind Speed</p>
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2 12H18.5C20.42 12 22 10.43 22 8.5C22 6.58 20.42 5 18.5 5C16.58 5 15 6.57 15 8.5V9" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2 9H9.31C10.8 9 12 7.79 12 6.31C12 4.82 10.79 3.62 9.31 3.62C7.82 3.62 6.62 4.83 6.62 6.31V6.69" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> </g></svg>
                        <span>${windSpeed}${windSpeedUnit}</span>
                    </div>
                </div>
                ${currentWeather(data)}
            </div>
            ${sevenDaysForecast(data)}
        </div>
    `;
    return detailedWeather;
}
//16. Returns a div containing the weather information from 'now' and the current hour humidity percent
function currentWeather(data) {
    const humidity = data.hourly.relativehumidity_2m;
    const humidityUnit = data.hourly_units.relativehumidity_2m;

    const currentWeather = `
        <div id="currentWeather">
            <div class="weatherCode">
                <div class="noMargin">
                    ${weather(data)} 
                </div>
            </div>
            <hr style="border: none; border-right: 1px solid white; height: 20px; width: 0;">
            <div class="weatherHumidity">
                <span class="noMargin">Humidity: ${getCurrentHumidity(data, humidity)}${humidityUnit} </span>
            </div>
        </div>
    `;
    return currentWeather;
}
//17. Check which svg coresponds to the current time weathercode, and reutrns it alongside the forecast descrpition
function weather(data) {
    const currentCode = data.current_weather.weathercode;
    if(currentCode !== undefined && currentCode !== null && !isNaN(currentCode)) {
        if(currentCode === 0) {
            return `<span>Clear Sky </span>${clearSky}`;
        }
        if(currentCode === 1||currentCode === 2||currentCode === 3) {
            return `<span>Partly cloudy </span>${partlyCloudy}`;
        }
        if(currentCode === 45||currentCode === 48) {
            return `<span>Fog </span>${fog}`;
        }
        if(currentCode === 51||currentCode ===53||currentCode ===55||currentCode ===56||currentCode ===57) {
            return `<span>Drizzle </span>${drizzle}`;
        }
        if(currentCode === 61||currentCode ===63||currentCode ===65||currentCode ===66||currentCode ===67) {
            return `<span>Rain </span>${rain}`;
        }
        if(currentCode=== 71||currentCode ===73||currentCode ===75||currentCode ===77) {
            return `<span>Snow </span>${snow}`;
        }
        if(currentCode=== 80||currentCode ===81||currentCode ===82) {
            return `<span>Rain Showers </span>${rainShowers}`;
        }
        if(currentCode=== 85||currentCode ===86) {
            return `<span>Snow Showers </span>${snowShowers}`;
        }
        if(currentCode=== 95||currentCode ===96 || currentCode ===99) {
            return `<span>Thunderstorm </span>${thunderstorm}`;
        }
        else {
            return `<span>Tricky weather today</span>`;
        }
    }
}
//18. Returns a div containing the next seven days temperature forecast
function sevenDaysForecast(data) {
    const sevenDaysForecast = `
        <div id="sevenDaysForecast">
            <h1 class="sevenDaysTitle"> <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <g id="Calendar / Calendar_Days"> <path id="Vector" d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </g></svg> 
            7-Day Forecast</h1>
            <div id="daysContainer">
                <!-- owl-carousel owl-theme -->
                <div class="sevenDaysList">
                    ${nextSevenDays(data)}
                </div>
            </div>
        </div>
    `;

    return sevenDaysForecast;
}
//19.Returns a div element, containing the day's name and daily minimum and maximum temperatures, for each of the next seven days
function nextSevenDays(data) {
    const celsius = data.hourly_units.temperature_2m;
    const dailyMin = data.daily.temperature_2m_min;
    const dailyMax = data.daily.temperature_2m_max;
    const weekDays = data.daily.time;

    let nextSevenDays = '';
    for(let i =0; i<dailyMin.length; i++) {
        nextSevenDays += `
            <div class="dailyCard">
                <span class="weekDay">${weekDays[i] === weekDays[0] ? 'Today' : dayOfWeek(weekDays[i])}</span>
                <span class="rangeTemp">${Math.round(dailyMin[i])}${celsius}<hr class="noMargin"></span>
                <span class="rangeTemp">${Math.round(dailyMax[i])}${celsius}</span>
            </div>
        `;
    }
    return nextSevenDays;
}
//20. Get the current humidity, based on the association between current time and the hourly humidity
function getCurrentHumidity(data, arr) {
    const hourlyTime = data.hourly.time;
    const currentTime = data.current_weather.time;
    const indexOfNow = hourlyTime.findIndex(item => item === currentTime);
    const currentHumidity = arr[indexOfNow];

    return currentHumidity;
}


//////////////////////////////////////////HELPERS FUNCTIONS////////////////////////////////////////////
//21. Functions that help formating or converting data, into useful formats, ready to be displayed
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}

function formatDate(date) {
    const getDate = new Date(date); 
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const formattedDate = getDate.toLocaleDateString('en-US', options);

    return formattedDate;
}

function dayOfWeek(date) {
    const getDate = new Date(date); 
    const options = { weekday: 'short' };
    const dayOfWeek = getDate.toLocaleDateString('en-US', options);

    return dayOfWeek;
}

function getHour(time) {
    const getHour = new Date(time);
    const hour = getHour.getHours().toString().padStart(2, '0');
    const minutes = getHour.getMinutes().toString().padStart(2, '0');

    return `${hour}:${minutes}`;
}

function apparentTemp(data) {
    const currentTime = data.current_weather.time;
    const hourlyTime = data.hourly.time;
    const index = hourlyTime.findIndex(item => item === currentTime);
    const apparentTemperature = data.hourly.apparent_temperature[index];

    return apparentTemperature;
}
