export const horizontalBarConfiguration = (data, xField, yField) => {
    return {
        data,
        xField: xField,
        yField: yField,
        autoFit: true,
        seriesField: yField,
        color: "#00b48c",
        barWidthRatio: 0.3,
        legend: false,
    }
}

export const pieChartConfiguration = (data, angleField, colorField, content = '', extraConfig = {}) => {
    return {...{
        appendPadding: 10,
        data,
        angleField,
        colorField,
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-50%',
          content: `{${angleField}}`,
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: 14,
              fontFamily: 'inherit'
            },
            content: content,
          },
        },
      }, ...extraConfig};
}