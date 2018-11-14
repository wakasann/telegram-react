/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import MessageControl from './Message/MessageControl';

class MediaViewer extends React.Component {

    render() {
        const { chatId, messageId } = this.props;

        return (
            <div className='media-viewer'>
                <MessageControl chatId={chatId} messageId={messageId}/>
            </div>
        );
    }
}

export default MediaViewer;