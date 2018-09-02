/**

	This code is generated.
	For more information see generation/README.md.
*/


function sanitize_matcher(matcher) {
  if (!matcher._call) {
    return matcher;
  }

  const originalMatcher = typeof matcher._call === 'function' ? matcher._call() : matcher._call;
  return originalMatcher.type ? originalMatcher.value : originalMatcher;
} 
class DetoxAssertion {
  static assertMatcher(i, m) {
    if (!i) {
      throw new Error('i should be truthy, but it is "' + i + '"');
    }

    if (!m) {
      throw new Error('m should be truthy, but it is "' + m + '"');
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "assertMatcher",
      args: [{
        type: "ViewInteraction",
        value: i
      }, {
        type: "Invocation",
        value: sanitize_matcher(m)
      }]
    };
  }

  static assertNotVisible(i) {
    if (!i) {
      throw new Error('i should be truthy, but it is "' + i + '"');
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "assertNotVisible",
      args: [{
        type: "ViewInteraction",
        value: i
      }]
    };
  }

  static assertNotExists(i) {
    if (!i) {
      throw new Error('i should be truthy, but it is "' + i + '"');
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "assertNotExists",
      args: [{
        type: "ViewInteraction",
        value: i
      }]
    };
  }

  static waitForAssertMatcher(i, m, timeoutSeconds) {
    if (!i) {
      throw new Error('i should be truthy, but it is "' + i + '"');
    }

    if (!m) {
      throw new Error('m should be truthy, but it is "' + m + '"');
    }

    if (typeof timeoutSeconds !== "number") throw new Error("timeoutSeconds should be a number, but got " + (timeoutSeconds + (" (" + (typeof timeoutSeconds + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "waitForAssertMatcher",
      args: [{
        type: "ViewInteraction",
        value: i
      }, {
        type: "Invocation",
        value: sanitize_matcher(m)
      }, {
        type: "Double",
        value: timeoutSeconds
      }]
    };
  }

  static waitForAssertMatcherWithSearchAction(i, m, searchAction, searchMatcher) {
    if (!i) {
      throw new Error('i should be truthy, but it is "' + i + '"');
    }

    if (!m) {
      throw new Error('m should be truthy, but it is "' + m + '"');
    }

    if (!searchAction) {
      throw new Error('searchAction should be truthy, but it is "' + searchAction + '"');
    }

    if (!searchMatcher) {
      throw new Error('searchMatcher should be truthy, but it is "' + searchMatcher + '"');
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxAssertion"
      },
      method: "waitForAssertMatcherWithSearchAction",
      args: [{
        type: "ViewInteraction",
        value: i
      }, {
        type: "Invocation",
        value: sanitize_matcher(m)
      }, {
        type: "ViewAction",
        value: searchAction
      }, {
        type: "Invocation",
        value: sanitize_matcher(searchMatcher)
      }]
    };
  }

}

module.exports = DetoxAssertion;