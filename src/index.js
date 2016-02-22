import React, { Component, PropTypes } from 'react';

export default class Strike extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    height: PropTypes.number,
    background: PropTypes.string,
    space: PropTypes.number,
  };

  static defaultProps = {
    height: 1,
    background: 'silver',
    space: 15,
  };

  render() {
    const { children, className, height, background, space } = this.props;

    const parts = {
      position: 'absolute',
      top: '50%',
      width: '9999px',
      marginTop: `-${Math.floor(height / 2)}px`,
      height: `${height}px`,
      backgroundColor: background,
    };

    const before = {
      ...parts,
      right: '100%',
      marginRight: `${space}px`,
    };

    const after = {
      ...parts,
      left: '100%',
      marginLeft: `${space}px`,
    };

    const main = {
      position: 'relative',
      display: 'inline-block',
    };

    const root = {
      display: 'block',
      textAlign: 'center',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    };

    return (
      <div style={root} className={className}>
        <span style={main}>
          <span style={before} />
          {children}
          <span style={after} />
        </span>
      </div>
    );
  }
}
