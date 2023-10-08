import React, { Component } from 'react';
import { View, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';

class AnimatedViewDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1,
    };
  }

  // 当点击按钮时，放大视图
  scaleUp = () => {
    this.setState({
      scale: 1.5, // 放大倍数
    });
  };

  // 当点击按钮时，还原视图大小
  resetScale = () => {
    this.setState({
      scale: 1, // 还原到原始大小
    });
  };

  render() {
    const { scale } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Animatable.View
          animation="zoomIn" // 使用 'zoomIn' 动画
          duration={500} // 动画持续时间（毫秒）
          style={{ width: 150, height: 150, backgroundColor: 'lightblue' }}
          useNativeDriver // 使用原生动画驱动（提高性能）
          transition={['scale']} // 监听 scale 属性的变化
          style={{ transform: [{ scale }] }} // 通过 transform 属性添加放大效果
        >
          {/* 这里放置你要放大的内容 */}
          <Button title="放大" onPress={this.scaleUp} />
        </Animatable.View>
        <Button title="还原" onPress={this.resetScale} />
      </View>
    );
  }
}

export default AnimatedViewDemo;
