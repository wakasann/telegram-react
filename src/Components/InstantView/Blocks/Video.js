/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Caption from './Caption';
import MediaVideo from '../../../Components/Message/Media/Video';

function Video(props) {
    const { video, caption, needAutoplay, isLooped, openMedia } = props;

    return (
        <>
            <MediaVideo video={video} style={{ margin: '0 auto' }} openMedia={openMedia} />
            <Caption text={caption.text} credit={caption.credit} />
        </>
    );
}

Video.propTypes = {
    video: PropTypes.object.isRequired,
    caption: PropTypes.object.isRequired,
    needAutoplay: PropTypes.bool.isRequired,
    isLooped: PropTypes.bool.isRequired,
    openMedia: PropTypes.func
};

export default Video;
