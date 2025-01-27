/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Caption from './Caption';

function Embedded(props) {
    const { url, html, width, height, caption, isFullWidth, allowScrolling } = props;
    return (
        <figure>
            <iframe
                src={url ? url : null}
                srcDoc={url ? null : html}
                width={width > 0 ? width : null}
                height={height > 0 ? height : null}
                allowFullScreen={isFullWidth}
                scrolling={allowScrolling ? 'auto' : 'no'}
                frameBorder={0}
            />
            <Caption text={caption.text} credit={caption.credit} />
        </figure>
    );
}

Embedded.propTypes = {
    url: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
    posterPhoto: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    caption: PropTypes.object.isRequired,
    isFullWidth: PropTypes.bool.isRequired,
    allowScrolling: PropTypes.bool.isRequired
};

export default Embedded;
