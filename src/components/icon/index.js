import * as React from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';
const IconProps={
    type: '',
    className: '',
    title: '',
    onClick: function () {

    },
    spin: false,
    style: '',
}

export default (props: IconProps) => {
    const { type,className='', spin } = props;
    const classString = classNames({
        icon: true,
        'icon-spin': !!spin || type === 'loading',
        [`icon-${type}`]: true,
    }, className);
    return <i {...omit(props, ['type', 'spin'])} className={classString} />;
};