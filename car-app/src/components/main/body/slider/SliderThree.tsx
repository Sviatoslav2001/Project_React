import SwiftSlider from 'react-swift-slider';

const SliderThree = () => {
    const data =  [
        {'id':'1','src':'https://cdn3.riastatic.com/photosnew/auto/photo/honda_accord__477561008f.webp'},
        {'id':'2','src':'https://cdn0.riastatic.com/photosnew/auto/photo/honda_accord__477561005f.webp'},
        {'id':'3','src':'https://cdn1.riastatic.com/photosnew/auto/photo/honda_accord__477560986f.webp'},
        {'id':'4','src':'https://cdn2.riastatic.com/photosnew/auto/photo/honda_accord__477560992f.webp'},
        {'id':'5','src':'https://cdn3.riastatic.com/photosnew/auto/photo/honda_accord__477561018f.webp'},
        // {'id':'6','src':'https://cdn2.riastatic.com/photosnew/auto/photo/land-rover_range-rover-sport__477025512f.webp'},
    
      ];

    return (
        <div className="sliderImg">
        <SwiftSlider data={data} height={203} enableNextAndPrev={false} showDots={false} interval={2000}/>
        </div>
      );
    }

export default SliderThree;