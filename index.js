/**
 * getElementsById
 * Copyright (c) Simon Raichl 2019
 * MIT License
 */

export default function getElementsById (...elements) {
    return elements.map(element => document.getElementById(element));
}