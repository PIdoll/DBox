import { placements as rcPlacements } from 'rc-tooltip/lib/placements';

const autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1,
}

const autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0,
}
const targetOffset = [0, 0];

export function getOverflowOptions(antoAdjustOverflow) {
  if (typeof antoAdjustOverflow === 'boolean') {
      return antoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
    }
    return {
      ...autoAdjustOverflowDisabled,
      ...antoAdjustOverflow,
    };
}

export default function getPlacements(config) {
  const { arrowWidth = 5, horizontalArrowShift = 16, verticalArrowShift = 12, autoAdjustOverflow = true } = config;
  const placementMap = {
    left: {
      points: [
        'cr', 'cl'
      ],
      offset: [-4, 0]
    },
    right: {
      points: [
        'cl', 'cr'
      ],
      offset: [4, 0]
    },
    top: {
      points: [
        'bc', 'tc'
      ],
      offset: [0, -4]
    },
    bottom: {
      points: [
        'tc', 'bc'
      ],
      offset: [0, 4]
    },
    topLeft: {
      points: [
        'bl', 'tc'
      ],
      offset: [ -(horizontalArrowShift + arrowWidth),
        -4
      ]
    },
    leftTop: {
      points: [
        'tr', 'cl'
      ],
      offset: [
        -4, -(verticalArrowShift + arrowWidth)
      ]
    },
    topRight: {
      points: [
        'br', 'tc'
      ],
      offset: [
        horizontalArrowShift + arrowWidth,
        -4
      ]
    },
    rightTop: {
      points: [
        'tl', 'cr'
      ],
      offset: [
        4, -(verticalArrowShift + arrowWidth)
      ]
    },
    bottomRight: {
      points: [
        'tr', 'bc'
      ],
      offset: [
        horizontalArrowShift + arrowWidth,
        4
      ]
    },
    rightBottom: {
      points: [
        'bl', 'cr'
      ],
      offset: [
        4, verticalArrowShift + arrowWidth
      ]
    },
    bottomLeft: {
      points: [
        'tl', 'bc'
      ],
      offset: [ -(horizontalArrowShift + arrowWidth),
        4
      ]
    },
    leftBottom: {
      points: [
        'br', 'cl'
      ],
      offset: [
        -4, verticalArrowShift + arrowWidth
      ]
    }
  };
// console.log(config.arrowPointAtCenter);

// 设置了 arrowPointAtCenter 后，箭头将指向目标元素的中心。
  Object.keys(placementMap).forEach(key => {
    placementMap[key] = config.arrowPointAtCenter ? {
      ...placementMap[key],
      overflow: getOverflowOptions(autoAdjustOverflow),
      targetOffset,
    } : {
      ...rcPlacements[key],
      overflow: getOverflowOptions(autoAdjustOverflow)
    }
  });
  // console.log(placementMap);

  return placementMap;
}
