
import MeCab

def txt_bom():
    hack_message = "sds sdsnewlen(const void *init, size_t initlen) { \n    struct sdshdr *sh; sh = zmalloc(sizeof(struct sdshdr)+initlen+1); \n#ifdef SDS_ABORT_ON_OOM \nif (sh == NULL) sdsOomAbort();\n#else\n    if (sh == NULL) return NULL; \n#endif \nsh->len = initlen; \nsh->free = 0;\n if (initlen) { \nif (init) memcpy(sh->buf, init, initlen);\n     else memset(sh->buf,0,initlen); \n }\nsh->buf[initlen] = '0';\nreturn (char*)sh->buf; \n} "
    for ch in hack_message:
        print(ch)
        time.sleep(0.01)