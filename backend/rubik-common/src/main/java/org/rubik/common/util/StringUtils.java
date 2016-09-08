package org.rubik.common.util;

import com.google.common.base.Joiner;
import com.google.common.base.Splitter;

/**
 * @author xiajinxin
 * @since 2016-09-08
 */
public abstract class StringUtils {
    public static final Splitter COMMA_SPLITTER = Splitter.on(',');

    public static final Joiner COMMA_JOINER = Joiner.on(',');
}
