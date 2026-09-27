/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {

    // IPv4
    if (queryIP.includes(".")) {
        let parts = queryIP.split(".");

        if (parts.length !== 4) {
            return "Neither";
        }

        for (let part of parts) {

            // Empty part
            if (part.length === 0) {
                return "Neither";
            }

            // Only digits
            if (!/^\d+$/.test(part)) {
                return "Neither";
            }

            // Leading zero
            if (part.length > 1 && part[0] === "0") {
                return "Neither";
            }

            // Range 0 - 255
            let num = Number(part);

            if (num < 0 || num > 255) {
                return "Neither";
            }
        }

        return "IPv4";
    }

    // IPv6
    if (queryIP.includes(":")) {
        let parts = queryIP.split(":");

        if (parts.length !== 8) {
            return "Neither";
        }

        for (let part of parts) {

            // Length must be 1 to 4
            if (part.length < 1 || part.length > 4) {
                return "Neither";
            }

            // Only hexadecimal characters
            if (!/^[0-9a-fA-F]+$/.test(part)) {
                return "Neither";
            }
        }

        return "IPv6";
    }

    return "Neither";
};