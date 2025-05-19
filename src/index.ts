"use strict";

/**
 * List of all HTTP status code
 *
 * @enum
 * @const
 */
enum HttpCodes {
    // 1xx Informational

    /** 100 - The server has received the request headers and the client should proceed to send the request body. */
    INFO_CONTINUE = 100,
    /** 101 - The server is acknowledging the client's request to change protocols and is agreeing to do so. */
    INFO_SWITCHING_PROTOCOLS = 101,
    /** 102 - The server has received and is processing the request, but no response is available yet, preventing the client from timing out. */
    INFO_PROCESSING = 102,
    /** 103 - The server is sending some preliminary headers to allow the client to start preloading resources while the main response is being prepared. */
    INFO_EARLY_HINT = 103,

    // 2xx Success
    /** 200 - The request has succeeded. */
    SUCCESS_OK = 200,
    /** 201 - The request has succeeded and a new resource has been created as a result. */
    SUCCESS_CREATED = 201,
    /** 202 - The request has been accepted for processing, but the processing has not been completed. */
    SUCCESS_ACCEPTED = 202,
    /** 203 - The returned metadata is not from the origin server but is collected from a local or third-party copy. */
    SUCCESS_NON_AUTHORITATIVE_INFORMATION = 203,
    /** 204 - The server has successfully fulfilled the request and there is no additional content to send in the response payload body. */
    SUCCESS_NO_CONTENT = 204,
    /** 205 -The server has fulfilled the request and desires that the user agent reset the document view, which caused the request to be sent. */
    SUCCESS_RESET_CONTENT = 205,
    /** 206 - The server is delivering only part of the resource due to a range header sent by the client. */
    SUCCESS_PARTIAL_CONTENT = 206,

    // 3xx Redirection
    /** 300 -The requested resource corresponds to any one of a set of representations, each with its own specific location. */
    REDIRECT_MULTIPLE_CHOICES = 300,
    /** 301 - The requested resource has been assigned a new permanent URI and any future references to this resource should use one of the returned URIs. */
    REDIRECT_MOVED_PERMANENTLY = 301,
    /** 302 - The requested resource resides temporarily under a different URI. */
    REDIRECT_FOUND = 302, //
    /** 303 - The response to the request can be found under a different URI and should be retrieved using a GET method on that resource. */
    REDIRECT_SEE_OTHER = 303,
    /** 304 - Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. Used for caching. */
    REDIRECT_NOT_MODIFIED = 304,
    //REDIRECT_USE_PROXY = 305, // Deprecated
    //REDIRECT_SWITCH_PROXY = 306, // No longer used
    /** 305 - The requested resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI. */
    REDIRECT_TEMPORARY_REDIRECT = 307,
    /** 308 - The target resource has been assigned a new permanent URI and any future references to this resource should use one of the returned URIs. */
    REDIRECT_PERMANENT_REDIRECT = 308,

    // 4xx Client Error
    /** 400 - The server cannot or will not process the request due to an apparent client error. */
    CLIENT_ERR_BAD_REQUEST = 400,
    /** 401 - The client failed to authenticate with the server. */
    CLIENT_ERR_UNAUTHORIZED = 401,
    /** The client does not have permission to access the requested resource. */
    CLIENT_ERR_FORBIDDEN = 403,
    /** The server could not find the requested resource. */
    CLIENT_ERR_NOT_FOUND = 404,
    /** The HTTP method used by the client is not allowed for the requested resource. */
    CLIENT_ERR_METHOD_NOT_ALLOWED = 405,
    /** The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request. */
    CLIENT_ERR_NOT_ACCEPTABLE = 406,
    /** The client must first authenticate itself with the proxy. */
    CLIENT_ERR_PROXY_AUTHENTICATION_REQUIRED = 407,
    /** The server timed out waiting for the request. */
    CLIENT_ERR_REQUEST_TIMEOUT = 408,
    /** The request could not be completed due to a conflict with the current state of the resource. */
    CLIENT_ERR_CONFLICT = 409,
    /** The requested resource is no longer available and will not be available again. */
    CLIENT_ERR_GONE = 410,
    /** The server refuses to accept the request without a defined Content-Length. */
    CLIENT_ERR_LENGTH_REQUIRED = 411,
    /** The client has specified a precondition in its headers that the server does not meet. */
    CLIENT_ERR_PRECONDITION_FAILED = 412,
    /** The request is larger than the server is willing or able to process. */
    CLIENT_ERR_PAYLOAD_TOO_LARGE = 413, // Formerly "Request Entity Too Large"
    /** The URI provided by the client was too long for the server to process. */
    CLIENT_ERR_URI_TOO_LONG = 414, // Formerly "Request-URI Too Long"
    /** The media format of the requested data is not supported by the server, so the server is rejecting the request. */
    CLIENT_ERR_UNSUPPORTED_MEDIA_TYPE = 415,
    /** The range specified in the Range header field in the request cannot be fulfilled. */
    CLIENT_ERR_RANGE_NOT_SATISFIABLE = 416,
    /** The server expected the Expect header field to be present in the request, but it was not. */
    CLIENT_ERR_EXPECTATION_FAILED = 417,
    /** April Fools' joke. The server cannot brew coffee because it is a teapot. */
    CLIENT_ERR_I_AM_A_TEAPOT = 418, // April Fools' joke
    /** The request was directed at a server that is not configured to accept requests for the requested resource. */
    CLIENT_ERR_MISDIRECTED_REQUEST = 421,
    /** The request could not be completed because the server could not fulfill all the conditions specified by the client. */
    CLIENT_ERR_UNPROCESSABLE = 422,
    /** The request could not be completed because the client attempted to perform an action on a locked resource. */
    CLIENT_ERR_LOCKED = 423,
    /** The request failed because it depended on another request and that request failed. */
    CLIENT_ERR_FAILED_DEPENDENCY = 424,
    /** The client should switch to a different protocol, such as TLS/1.0, given in the Upgrade header field. */
    CLIENT_ERR_UPGRADE_REQUIRED = 426,
    /** The origin server requires the request to be conditional. */
    CLIENT_ERR_PRECONDITION_REQUIRED = 428,
    /** The client has sent too many requests in a given amount of time. */
    CLIENT_ERR_TOO_MANY_REQUESTS = 429,
    /** The server is unwilling to process the request because the header fields it contains are too large. */
    CLIENT_ERR_REQUEST_HEADER_TOO_LARGE = 431,
    /** Used by Microsoft's Internet Information Services (IIS) to signal when a request is blocked. */
    CLIENT_ERR_UNAVAILABLE_LEGAL = 451,

    // 5xx Server Error
    /** The server encountered an unexpected condition that prevented it from fulfilling the request. */
    SERVER_ERR_INTERNAL = 500,
    /** The server does not support the functionality required to fulfill the request. */
    SERVER_ERR_NOT_IMPLEMENTED = 501,
    /** The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request. */
    SERVER_ERR_BAD_GATEWAY = 502,
    /** The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay. */
    SERVER_ERR_SERVICE_UNAVAILABLE = 503,
    /** The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server. */
    SERVER_ERR_GATEWAY_TIMEOUT = 504,
    /** The server does not support the HTTP protocol version used in the request. */
    SERVER_ERR_HTTP_VERSION_NOT_SUPPORTED = 505,
    /** Transparent content negotiation for the request results in a choice for the server, but no supported choice for the client. */
    SERVER_ERR_VARIANT_ALSO_NEGOTIATES = 506,
    /** The server is unable to store the representation needed to complete the request. */
    SERVER_ERR_INSUFFICIENT_STORAGE = 507,
    /** The server detected an infinite loop while processing the request. */
    SERVER_ERR_LOOP_DETECTED = 508,
    /** Further extensions to the request are required for the server to fulfill it. */
    SERVER_ERR_NOT_EXTENDED = 510,
    /** The client needs to authenticate to gain network access. */
    SERVER_ERR_NETWORK_AUTHENTICATION_REQUIRED = 511,
}

export default HttpCodes;