import SwiftSlider from 'react-swift-slider';

const SliderTwo = () => {
    const data =  [
        {'id':'1','src':'https://cdn1.riastatic.com/photosnew/auto/photo/nissan_rogue__477873201f.webp'},
        {'id':'2','src':'https://cdn2.riastatic.com/photosnew/auto/photo/nissan_rogue__477873202f.webp'},
        {'id':'3','src':'https://cdn4.riastatic.com/photosnew/auto/photo/nissan_rogue__477873204f.webp'},
        // {'id':'4','src':'https://cdn2.riastatic.com/photosnew/auto/photo/nissan_rogue__477873212f.webp'},
        {'id':'5','src':'https://cdn0.riastatic.com/photosnew/auto/photo/nissan_rogue__477873215f.webp'},
        {'id':'6','src':'https://cdn3.riastatic.com/photosnew/auto/photo/nissan_rogue__477873228f.webp'},
    
      ];

    return (
        <div className="sliderImg">
        <SwiftSlider data={data} height={203} enableNextAndPrev={false} showDots={false} interval={2000}/>
        </div>
      );
    }


    export default SliderTwo